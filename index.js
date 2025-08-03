

const teamMembers = [
  {
    name: "Faith Koduen",
    title: "Software Engineer in Training",
    quote: "Where code meets care - tech for communities.",
    image: "images/image.png", 
    links: [
      { icon: "fab fa-linkedin", url: "https://www.linkedin.com/in/faith-koduen-aab479354/" },
      { icon: "fab fa-github", url: "https://github.com/faithkoduen" },
      { icon: "fab fa-behance", url: "#" }
    ]
  },
  {
    name: "Amuor Mangar",
    title: "Software Engineer Intern",
    quote: "When code clicks and users smile - my happy place.",
    image: "", 
    links: [
      { icon: "fab fa-linkedin", url: "#" },
      { icon: "fab fa-github", url: "#" },
      { icon: "fab fa-behance", url: "#" }
    ]
  },
  {
    name: "Eyerusalem Yrga",
    title: "Software Engineer Intern",
    quote: "When code clicks and users smile - my happy place.",
    image: "", 
    links: [
      { icon: "fab fa-linkedin", url: "#" },
      { icon: "fab fa-github", url: "#" },
      { icon: "fab fa-behance", url: "#" }
    ]
  },
  {
    name: "Gladwine Ouma",
    title: "Software Engineer Intern",
    quote: "When code clicks and users smile - my happy place.",
    image: "", 
    links: [
      { icon: "fab fa-linkedin", url: "#" },
      { icon: "fab fa-github", url: "#" },
      { icon: "fab fa-behance", url: "#" }
    ]
  }
];

const container = document.getElementById('team-cards');

teamMembers.forEach(member => {
  // Create card wrapper
  const card = document.createElement('div');
  card.className = 'card';

  // Profile image
  const img = document.createElement('img');
  img.className = 'avatar';
  img.src = member.image;
  img.alt = member.name;

  // Info wrapper
  const info = document.createElement('div');

  // Name
  const h3 = document.createElement('h3');
  h3.textContent = member.name;

  // Title
  const title = document.createElement('p');
  title.className = 'title';
  title.textContent = member.title;

  // Quote
  const quote = document.createElement('p');
  quote.className = 'quote';
  quote.textContent = `"${member.quote}"`;

  // Icons
  const iconsDiv = document.createElement('div');
  iconsDiv.className = 'icons';
  member.links.forEach(link => {
    const a = document.createElement('a');
    a.href = link.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    const i = document.createElement('i');
    i.className = link.icon;
    a.appendChild(i);
    iconsDiv.appendChild(a);
  });

  // Append to info and card
  info.appendChild(h3);
  info.appendChild(title);
  info.appendChild(quote);
  info.appendChild(iconsDiv);

  card.appendChild(img);
  card.appendChild(info);

  container.appendChild(card);
});

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

