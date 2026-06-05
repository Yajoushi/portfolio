// ========================================
// MOBILE MENU TOGGLE
// ========================================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
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
// ======================================= =/

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

document.querySelectorAll('.experience-item, .skill-category, .project-card, .stat-item, .info-box').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// ========================================
// COUNTER ANIMATION
// ========================================

const animateCounters = () => {
    const statItems = document.querySelectorAll('.stat-number');
    const duration = 2000;
    const frameRate = 60;
    const frames = duration / (1000 / frameRate);

    statItems.forEach(item => {
        const targetText = item.textContent;
        const target = parseInt(targetText);
        
        // Only animate numbers
        if (!isNaN(target)) {
            let current = 0;
            const increment = target / frames;
            let animated = false;

            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    item.textContent = Math.floor(current) + '+';
                    requestAnimationFrame(updateCounter);
                } else {
                    item.textContent = targetText;
                    animated = true;
                }
            };

            // Trigger animation when element comes into view
            const counterObserver = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && !animated) {
                    updateCounter();
                }
            });

            counterObserver.observe(item);
        }
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
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ========================================
// PAGE LOAD ANIMATION
// ========================================

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// ========================================
// COPY TO CLIPBOARD (for contact info)
// ========================================

const infoBoxes = document.querySelectorAll('.info-box a, .info-box p');
infoBoxes.forEach(box => {
    if (box.href && (box.href.startsWith('mailto:') || box.href.startsWith('tel:'))) {
        box.addEventListener('click', function(e) {
            // Allow default behavior for mailto and tel
        });
    }
});

// ========================================
// ADD ANALYTICS (Optional - Uncomment to use)
// ========================================

// Example: Track page views
console.log('Portfolio loaded successfully!');
console.log('Total sections: ' + document.querySelectorAll('section').length);
console.log('Total experience items: ' + document.querySelectorAll('.experience-item').length);