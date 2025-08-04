document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    // Add fixed header scroll effect
    const header = document.querySelector('.header');
    const heroSection = document.querySelector('.hero');
    window.addEventListener('scroll', function() {
        if (window.scrollY > heroSection.offsetHeight - 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    // Animation for features
    const features = document.querySelectorAll('.feature');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.1
    });
    features.forEach(feature => {
        observer.observe(feature);
    });
});
 document.addEventListener('DOMContentLoaded', function() {
            // Animate steps when they come into view
            const steps = document.querySelectorAll('.step');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, { threshold: 0.1 });
            // Set initial state for animation
            steps.forEach(step => {
                step.style.opacity = '0';
                step.style.transform = 'translateY(20px)';
                step.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                observer.observe(step);
            });
});
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
