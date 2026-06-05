// ========================================
// MOBILE MENU TOGGLE
// ========================================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.style.display = 'none';
        });
    });
}

// ========================================
// SMOOTH SCROLL & ACTIVE NAV LINK
// ========================================

window.addEventListener('scroll', () => {
    const navLinks = document.querySelectorAll('.nav-menu a');
    let current = '';

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ========================================
// SCROLL ANIMATIONS
// ========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.project-card, .skill-category, .info-box').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// ========================================
// COUNTER ANIMATION
// ========================================

const animateCounters = () => {
    const infoItems = document.querySelectorAll('.info-item h3');
    const duration = 2000;
    const frameRate = 60;
    const frames = duration / (1000 / frameRate);

    infoItems.forEach(item => {
        const target = parseInt(item.textContent);
        let current = 0;
        const increment = target / frames;
        const startTime = Date.now();

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                item.textContent = Math.floor(current) + '+';
                requestAnimationFrame(updateCounter);
            } else {
                item.textContent = target + '+';
            }
        };

        // Trigger animation when element comes into view
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && current === 0) {
                updateCounter();
                observer.unobserve(item);
            }
        });

        observer.observe(item);
    });
};

window.addEventListener('load', () => {
    animateCounters();
});

// ========================================
// SMOOTH LINK NAVIGATION
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ========================================
// DARK MODE TOGGLE (OPTIONAL)
// ========================================

const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

if (prefersDarkScheme.matches) {
    document.body.style.backgroundColor = '#1a202c';
    document.body.style.color = '#e2e8f0';
}

// ========================================
// FORM SUBMISSION (IF NEEDED)
// ========================================

const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted');
};

// ========================================
// PAGE LOAD ANIMATION
// ========================================

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    document.body.style.animation = 'fadeIn 0.5s ease';
});

// Add animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);