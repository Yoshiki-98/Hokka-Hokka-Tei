import React, { useState, useEffect, useRef } from 'react';
import { Box } from '@mui/material';

interface FadeInSectionProps {
  children: (isLanded: boolean) => React.ReactNode;
  trigger?: any;
  delay?: number;
}

const FadeInAndRotateSection: React.FC<FadeInSectionProps> = ({ children, trigger, delay = 0 }) => {
  const [isVisible, setVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isLanded, setIsLanded] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hasAnimated) return;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
          setTimeout(() => {
            setVisible(true);
            setHasAnimated(true);
            setTimeout(() => setIsLanded(true), 1200);
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
    setIsLanded(false);
    setTimeout(() => {
      setVisible(true);
      setTimeout(() => setIsLanded(true), 1200);
    }, 1200);
  }, [trigger, delay]);

  return (
    <Box
      ref={domRef}
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      sx={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20vh)',
        transition: 'opacity 0.6s ease-out, transform 1.2s ease-out',
        transitionDelay: isVisible ? '0s' : 'initial',
        visibility: isVisible ? 'visible' : 'hidden',
        willChange: 'opacity, transform',
      }}
    >
      {children(isLanded)}
    </Box>
  );
};

export default FadeInAndRotateSection;
