import React from 'react';
import { TargetAndTransition, Transition } from 'framer-motion';

interface AnimationConfig {
  shouldReduceMotion: boolean;
  isMobile: boolean;
}

export const getAnimationConfig = (): AnimationConfig => {
  // Safe window access with fallbacks
  const isMobile = typeof window !== 'undefined' ? window.innerWidth <= 768 : false;
  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;
  
  return {
    shouldReduceMotion: prefersReducedMotion,
    isMobile,
  };
};

// React hook version for use in components
export const useAnimationConfig = (): AnimationConfig => {
  const [config, setConfig] = React.useState<AnimationConfig>({
    shouldReduceMotion: false,
    isMobile: false,
  });

  React.useEffect(() => {
    const updateConfig = () => {
      setConfig(getAnimationConfig());
    };

    updateConfig();
    
    const handleResize = () => {
      setConfig(getAnimationConfig());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return config;
};

export const getOptimizedVariants = (config: AnimationConfig) => {
  const { shouldReduceMotion, isMobile } = config;
  const useSimpleAnimations = shouldReduceMotion || isMobile;
  
  return {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: useSimpleAnimations ? 0.05 : 0.2,
          delayChildren: useSimpleAnimations ? 0 : 0.1,
        },
      },
    },
    item: {
      hidden: { 
        y: useSimpleAnimations ? 10 : 30, 
        opacity: 0 
      },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: useSimpleAnimations ? 0.3 : 0.5,
          ease: useSimpleAnimations ? 'easeOut' : 'easeInOut',
        },
      },
    },
  };
};

export const getOptimizedHoverAnimation = (
  config: AnimationConfig,
  defaultAnimation: TargetAndTransition = { scale: 1.05 }
): TargetAndTransition => {
  const { shouldReduceMotion, isMobile } = config;
  
  if (shouldReduceMotion) {
    return {}; // No animation
  }
  
  if (isMobile) {
    return { scale: 1.02 }; // Minimal animation
  }
  
  return defaultAnimation; // Full animation
};

export const getOptimizedTransition = (
  config: AnimationConfig,
  defaultDuration: number = 0.3
): Transition => {
  const { shouldReduceMotion, isMobile } = config;
  
  return {
    duration: shouldReduceMotion ? 0.01 : (isMobile ? defaultDuration * 0.7 : defaultDuration),
    ease: isMobile ? 'easeOut' : 'easeInOut',
  };
};

// Lazy loading wrapper for heavy animations
export const LazyAnimation: React.FC<{
  children: React.ReactNode;
  fallback?: React.ReactNode;
  threshold?: number;
}> = ({ children, fallback = null, threshold = 0.3 }) => {
  const [shouldLoad, setShouldLoad] = React.useState(false);
  const config = useAnimationConfig();
  
  React.useEffect(() => {
    if (config.shouldReduceMotion || config.isMobile) {
      setShouldLoad(false);
      return;
    }
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    
    const element = document.querySelector('[data-lazy-animation]');
    if (element) {
      observer.observe(element);
    }
    
    return () => observer.disconnect();
  }, [config, threshold]);
  
  if (!shouldLoad && (config.shouldReduceMotion || config.isMobile)) {
    return React.createElement(React.Fragment, null, fallback);
  }
  
  return React.createElement(React.Fragment, null, children);
};

export default {
  getAnimationConfig,
  useAnimationConfig,
  getOptimizedVariants,
  getOptimizedHoverAnimation,
  getOptimizedTransition,
  LazyAnimation,
};