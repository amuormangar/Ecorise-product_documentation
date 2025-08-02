function toggleFAQ(element) {
  const body = element.nextElementSibling;
  const symbol = element.querySelector('span');
  const isOpen = body.classList.contains('open');

  if (isOpen) {
    body.classList.remove('open');
    symbol.textContent = '+';
    element.classList.remove('focused');
    element.setAttribute('aria-expanded', 'false');
  } else {
    body.classList.add('open');
    symbol.textContent = '−';
    element.classList.add('focused');
    element.setAttribute('aria-expanded', 'true');
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const faqHeaders = document.querySelectorAll('.faq-header');
  const toggleFaqBtn = document.getElementById('toggleFaqBtn');
  const faqContainer = document.getElementById('faqContainer');
  const feedbackForm = document.getElementById('feedbackForm');
  const questionInput = document.getElementById('question');
  const responseMsg = document.getElementById('responseMsg');

  faqHeaders.forEach(header => {
    header.setAttribute('role', 'button');
    header.setAttribute('aria-expanded', 'false');
    header.addEventListener('click', () => toggleFAQ(header));
    header.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleFAQ(header);
      }
    });
  });

  const faqs = Array.from(faqContainer.children);
  let showingAll = false;
  function updateFaqVisibility() {
    faqs.forEach((faq, index) => {
      if (!showingAll && index >= 4) {
        faq.style.display = 'none';
      } else {
        faq.style.display = '';
      }
    });
    toggleFaqBtn.textContent = showingAll ? 'Show Less' : 'Show More';
    toggleFaqBtn.setAttribute('aria-expanded', showingAll.toString());
  }
  updateFaqVisibility();

  toggleFaqBtn.addEventListener('click', () => {
    showingAll = !showingAll;
    updateFaqVisibility();
  });

  feedbackForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const text = questionInput.value.trim();
    if (!text) {
      responseMsg.textContent = "";
      return;
    }
    
    responseMsg.textContent = "We have received your question. We will get back to you soon.";
    questionInput.value = "";
    questionInput.focus();
    setTimeout(() => {
      responseMsg.textContent = "";
    }, 5000);
  });
});
