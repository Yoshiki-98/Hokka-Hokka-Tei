import React, { useState, useEffect, useRef } from 'react';
import { Box } from '@mui/material'; // Material-UIのBoxを使用していると仮定

interface FadeInSectionProps {
  children: React.ReactNode;
  trigger?: any;
  delay?: number;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ children, trigger, delay = 0 }) => {
  const [isVisible, setVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hasAnimated) return;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
          setTimeout(() => {
            setVisible(true);
            setHasAnimated(true);
          }, delay);
        }
      });
    });

    const currentElement = domRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [delay, hasAnimated]);

  useEffect(() => {
    setVisible(false);
    setTimeout(() => setVisible(true), 1200);
  }, [trigger, delay]);

  return (
    <Box
      ref={domRef}
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      sx={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(10vh)',
        transition: 'opacity 0.6s ease-out, transform 1.2s ease-out',
        transitionDelay: isVisible ? '0s' : 'initial',
        visibility: isVisible ? 'visible' : 'hidden',
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </Box>
  );
};

export default FadeInSection;
