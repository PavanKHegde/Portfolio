// Fade in animation
export const fadeIn = (element, duration = 600) => {
  element.style.opacity = '0';
  element.style.transition = `opacity ${duration}ms ease-in-out`;
  
  setTimeout(() => {
    element.style.opacity = '1';
  }, 10);
};

// Slide in from left
export const slideInLeft = (element, duration = 600) => {
  element.style.transform = 'translateX(-100%)';
  element.style.transition = `transform ${duration}ms ease-out`;
  
  setTimeout(() => {
    element.style.transform = 'translateX(0)';
  }, 10);
};

// Slide in from right
export const slideInRight = (element, duration = 600) => {
  element.style.transform = 'translateX(100%)';
  element.style.transition = `transform ${duration}ms ease-out`;
  
  setTimeout(() => {
    element.style.transform = 'translateX(0)';
  }, 10);
};

// Slide in from bottom
export const slideInBottom = (element, duration = 600) => {
  element.style.transform = 'translateY(100%)';
  element.style.transition = `transform ${duration}ms ease-out`;
  
  setTimeout(() => {
    element.style.transform = 'translateY(0)';
  }, 10);
};

// Scale in animation
export const scaleIn = (element, duration = 600) => {
  element.style.transform = 'scale(0)';
  element.style.transition = `transform ${duration}ms ease-out`;
  
  setTimeout(() => {
    element.style.transform = 'scale(1)';
  }, 10);
};

// Bounce animation
export const bounce = (element, duration = 600) => {
  element.style.animation = `bounce ${duration}ms ease-in-out`;
};

// Pulse animation
export const pulse = (element, duration = 1000) => {
  element.style.animation = `pulse ${duration}ms ease-in-out infinite`;
};

// Shake animation
export const shake = (element, duration = 600) => {
  element.style.animation = `shake ${duration}ms ease-in-out`;
};

// Rotate animation
export const rotate = (element, degrees = 360, duration = 1000) => {
  element.style.transition = `transform ${duration}ms ease-in-out`;
  element.style.transform = `rotate(${degrees}deg)`;
};

// Typing animation
export const typeWriter = (element, text, speed = 100) => {
  let i = 0;
  element.innerHTML = '';
  
  const typeInterval = setInterval(() => {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
    } else {
      clearInterval(typeInterval);
    }
  }, speed);
};

// Stagger animation for multiple elements
export const staggerAnimation = (elements, animationFunc, delay = 100) => {
  elements.forEach((element, index) => {
    setTimeout(() => {
      animationFunc(element);
    }, index * delay);
  });
};

// Intersection Observer for scroll animations
export const createScrollObserver = (callback, options = {}) => {
  const defaultOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observerOptions = { ...defaultOptions, ...options };
  
  return new IntersectionObserver(callback, observerOptions);
};

// Animate on scroll
export const animateOnScroll = (selector, animationFunc, options = {}) => {
  const elements = document.querySelectorAll(selector);
  
  const observer = createScrollObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animationFunc(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, options);
  
  elements.forEach(element => observer.observe(element));
  
  return observer;
};

// Progress bar animation
export const animateProgressBar = (element, targetWidth, duration = 1000) => {
  element.style.width = '0%';
  element.style.transition = `width ${duration}ms ease-out`;
  
  setTimeout(() => {
    element.style.width = `${targetWidth}%`;
  }, 10);
};

// Counter animation
export const animateCounter = (element, start, end, duration = 2000) => {
  const startTime = performance.now();
  const difference = end - start;
  
  function updateCounter(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Easing function (ease-out)
    const easeOut = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(start + (difference * easeOut));
    
    element.textContent = current;
    
    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = end;
    }
  }
  
  requestAnimationFrame(updateCounter);
};

// Parallax effect
export const createParallaxEffect = (element, speed = 0.5) => {
  const handleScroll = () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -speed;
    element.style.transform = `translateY(${rate}px)`;
  };
  
  window.addEventListener('scroll', handleScroll);
  
  return () => window.removeEventListener('scroll', handleScroll);
};

// CSS keyframes for animations
export const addCSSKeyframes = () => {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes bounce {
      0%, 20%, 53%, 80%, 100% {
        transform: translate3d(0, 0, 0);
      }
      40%, 43% {
        transform: translate3d(0, -30px, 0);
      }
      70% {
        transform: translate3d(0, -15px, 0);
      }
      90% {
        transform: translate3d(0, -4px, 0);
      }
    }
    
    @keyframes pulse {
      0%, 100% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.05);
      }
    }
    
    @keyframes shake {
      0%, 100% {
        transform: translateX(0);
      }
      10%, 30%, 50%, 70%, 90% {
        transform: translateX(-10px);
      }
      20%, 40%, 60%, 80% {
        transform: translateX(10px);
      }
    }
    
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes slideInLeft {
      from {
        transform: translateX(-100%);
      }
      to {
        transform: translateX(0);
      }
    }
    
    @keyframes slideInRight {
      from {
        transform: translateX(100%);
      }
      to {
        transform: translateX(0);
      }
    }
  `;
  
  document.head.appendChild(style);
};

// Initialize animations
export const initializeAnimations = () => {
  addCSSKeyframes();
  
  // Auto-animate elements with data attributes
  const elementsToAnimate = document.querySelectorAll('[data-animate]');
  
  elementsToAnimate.forEach(element => {
    const animationType = element.getAttribute('data-animate');
    const delay = element.getAttribute('data-delay') || 0;
    
    setTimeout(() => {
      switch (animationType) {
        case 'fade-in':
          fadeIn(element);
          break;
        case 'slide-in-left':
          slideInLeft(element);
          break;
        case 'slide-in-right':
          slideInRight(element);
          break;
        case 'slide-in-bottom':
          slideInBottom(element);
          break;
        case 'scale-in':
          scaleIn(element);
          break;
        default:
          fadeIn(element);
      }
    }, delay);
  });
};