/**
 * SCROLL-TRIGGERED ANIMATIONS
 * Handles intersection observer for scroll reveal effects
 */

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initScrollAnimations();
    initScrollProgress();
    initCounterAnimations();
    initParallaxEffects();
    initStaircaseGallery();
});

/**
 * Scroll reveal animations using Intersection Observer
 */
function initScrollAnimations() {
    // Configuration for intersection observer
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    // Create intersection observer
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                
                // Optional: unobserve after animation (one-time animation)
                // observer.unobserve(entry.target);
            } else {
                // Remove class when out of view for repeating animations
                // Comment out if you want one-time animations only
                entry.target.classList.remove('animated');
            }
        });
    }, observerOptions);

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll(
        '.animate-on-scroll, .fade-in-up, .fade-in-down, .fade-in-left, .fade-in-right, ' +
        '.zoom-in, .flip-in-x, .card-entrance, .stagger-children, .image-reveal'
    );

    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

/**
 * Scroll progress bar
 */
function initScrollProgress() {
    // Create progress bar if it doesn't exist
    let progressBar = document.querySelector('.scroll-progress');
    if (!progressBar) {
        progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        document.body.appendChild(progressBar);
    }

    // Update progress on scroll
    window.addEventListener('scroll', function() {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

/**
 * Animated number counters
 */
function initCounterAnimations() {
    const counters = document.querySelectorAll('.counter');
    
    const observerOptions = {
        threshold: 0.5
    };

    const counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                animateCounter(entry.target);
                entry.target.classList.add('counted');
            }
        });
    }, observerOptions);

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

/**
 * Animate a counter element
 */
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target')) || parseInt(element.textContent);
    const duration = parseInt(element.getAttribute('data-duration')) || 2000;
    const start = 0;
    const increment = target / (duration / 16); // 60fps
    let current = start;

    element.classList.add('animated');

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target.toLocaleString();
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current).toLocaleString();
        }
    }, 16);
}

/**
 * Parallax scroll effects
 */
function initParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.parallax-slow, .parallax-medium, .parallax-fast');
    
    if (parallaxElements.length === 0) return;

    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            let speed = 0.5; // default
            
            if (element.classList.contains('parallax-slow')) {
                speed = 0.3;
            } else if (element.classList.contains('parallax-medium')) {
                speed = 0.5;
            } else if (element.classList.contains('parallax-fast')) {
                speed = 0.8;
            }
            
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

/**
 * Staircase Gallery scroll-based fade-in
 */
function initStaircaseGallery() {
    const staircaseItems = document.querySelectorAll('.staircase-item');
    
    if (staircaseItems.length === 0) return;

    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = parseInt(entry.target.getAttribute('data-delay')) || 0;
                setTimeout(() => {
                    entry.target.classList.add('fade-in');
                }, delay);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    staircaseItems.forEach(item => {
        observer.observe(item);
    });
}

/**
 * Add hover tilt effect with mouse movement
 */
function addTiltEffect(element) {
    element.addEventListener('mousemove', function(e) {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    element.addEventListener('mouseleave', function() {
        element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    });
}

// Apply tilt effect to elements with .hover-tilt-3d class
document.querySelectorAll('.hover-tilt-3d').forEach(element => {
    addTiltEffect(element);
});

/**
 * Smooth scroll to anchor links
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Skip if it's just "#" or if it's handled by other scripts
        if (href === '#' || href === '#!') return;
        
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/**
 * Add ripple effect to buttons
 */
function createRipple(event) {
    const button = event.currentTarget;
    
    // Skip if button already has a ripple
    if (!button.classList.contains('animated-button')) return;
    
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add('ripple');
    
    const ripple = button.getElementsByClassName('ripple')[0];
    if (ripple) {
        ripple.remove();
    }
    
    button.appendChild(circle);
}

// Apply ripple effect to buttons
document.querySelectorAll('.animated-button').forEach(button => {
    button.addEventListener('click', createRipple);
});

/**
 * Lazy load images with fade-in effect
 */
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('fade-in');
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

lazyLoadImages();

/**
 * Add entrance animations to cards
 */
function initCardEntrance() {
    const cards = document.querySelectorAll('.card, .event-card, .trainer-card, .pool-card, .park-card, .resource-card');
    
    const cardObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('card-entrance', 'animated');
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    });
    
    cards.forEach(card => {
        if (!card.classList.contains('card-entrance')) {
            card.classList.add('card-entrance');
        }
        cardObserver.observe(card);
    });
}

initCardEntrance();

/**
 * Stagger animation for grid items
 */
function initStaggerAnimation() {
    const staggerContainers = document.querySelectorAll('.amenities-grid, .trainers-grid, .schedule-grid, .event-grid');
    
    staggerContainers.forEach(container => {
        if (!container.classList.contains('stagger-children')) {
            container.classList.add('stagger-children');
        }
    });
}

initStaggerAnimation();

/**
 * Add smooth hover effects to navigation
 */
const navLinks = document.querySelectorAll('.nav a, nav a');
navLinks.forEach(link => {
    if (!link.classList.contains('underline-expand')) {
        link.classList.add('underline-expand');
    }
});

/**
 * Performance optimization: Throttle scroll events
 */
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply throttling to scroll-heavy functions
const throttledScroll = throttle(() => {
    // Any heavy scroll-based calculations can go here
}, 100);

window.addEventListener('scroll', throttledScroll);

console.log('🎨 Animations loaded and initialized!');
