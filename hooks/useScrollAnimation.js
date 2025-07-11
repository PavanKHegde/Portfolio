// /hooks/userScrollAnimation.js

'use client';

import { useEffect, useRef, useState } from 'react';

// Hook for scroll-based animations
export const useScrollAnimation = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    once = true,
    delay = 0
  } = options;

  useEffect(() => {
    const currentElement = elementRef.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!once || !hasAnimated)) {
          if (delay > 0) {
            setTimeout(() => {
              setIsVisible(true);
              setHasAnimated(true);
            }, delay);
          } else {
            setIsVisible(true);
            setHasAnimated(true);
          }
          
          if (once) {
            observer.unobserve(currentElement);
          }
        } else if (!once && !entry.isIntersecting) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(currentElement);

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, rootMargin, once, delay, hasAnimated]);

  return { elementRef, isVisible };
};

// Hook for counter animation
export const useCounterAnimation = (end, duration = 2000, start = 0) => {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const currentElement = elementRef.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
          observer.unobserve(currentElement);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(currentElement);

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    const difference = end - start;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(start + (difference * easeOut));

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, start, duration]);

  return { elementRef, count };
};

// Hook for scroll progress
export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculateProgress = () => {
      const scrollTop = window.pageYOffset;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (scrollTop / documentHeight) * 100;
      setProgress(scrollProgress);
    };

    const handleScroll = () => {
      requestAnimationFrame(calculateProgress);
    };

    window.addEventListener('scroll', handleScroll);
    calculateProgress(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return progress;
};

// Hook for section visibility tracking
export const useSectionVisibility = (sectionIds) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observers = sectionIds.map(id => {
      const element = document.getElementById(id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { 
          threshold: 0.3,
          rootMargin: '-20% 0px -50% 0px'
        }
      );

      observer.observe(element);
      return observer;
    }).filter(Boolean);

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [sectionIds]);

  return activeSection;
};

// Hook for parallax effect
export const useParallax = (speed = 0.5) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -speed;
      setOffset(rate);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return offset;
};

// Hook for typing animation
export const useTypingAnimation = (text, speed = 100, delay = 0) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeout;
    let interval;

    const startTyping = () => {
      setIsTyping(true);
      let i = 0;
      
      interval = setInterval(() => {
        if (i < text.length) {
          setDisplayText(text.substring(0, i + 1));
          i++;
        } else {
          clearInterval(interval);
          setIsTyping(false);
          setIsComplete(true);
        }
      }, speed);
    };

    if (delay > 0) {
      timeout = setTimeout(startTyping, delay);
    } else {
      startTyping();
    }

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, speed, delay]);

  return { displayText, isTyping, isComplete };
};

// Hook for stagger animation
export const useStaggerAnimation = (itemCount, delay = 100) => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const currentElement = elementRef.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(currentElement);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(currentElement);

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const timeouts = [];
    
    for (let i = 0; i < itemCount; i++) {
      const timeout = setTimeout(() => {
        setVisibleItems(prev => new Set([...prev, i]));
      }, i * delay);
      
      timeouts.push(timeout);
    }

    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, [isVisible, itemCount, delay]);

  return { elementRef, visibleItems };
};

// Hook for scroll to section
export const useScrollToSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return scrollToSection;
};