import { useReducedMotion } from '../hooks/useReducedMotion';

/**
 * Creates animation variants that respect prefers-reduced-motion
 * Uses GPU-accelerated transforms (translate3d) instead of y transforms
 */
export function useAnimationVariants() {
  const prefersReducedMotion = useReducedMotion();

  const fadeInUp = {
    hidden: { 
      opacity: 0, 
      transform: 'translate3d(0, 20px, 0)' // GPU-accelerated
    },
    visible: { 
      opacity: 1, 
      transform: 'translate3d(0, 0, 0)',
      transition: prefersReducedMotion 
        ? { duration: 0.01 } 
        : { duration: 0.5, ease: 'easeOut' }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: prefersReducedMotion 
        ? { duration: 0.01 } 
        : { duration: 0.4, ease: 'easeOut' }
    }
  };

  const scaleIn = {
    hidden: { 
      opacity: 0, 
      transform: 'scale3d(0.9, 0.9, 1) translate3d(0, 10px, 0)' // GPU-accelerated
    },
    visible: { 
      opacity: 1, 
      transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)',
      transition: prefersReducedMotion 
        ? { duration: 0.01 } 
        : { duration: 0.5, ease: 'easeOut', delay: 0.25 }
    }
  };

  return {
    fadeInUp,
    fadeIn,
    scaleIn,
    prefersReducedMotion
  };
}

/**
 * Creates staggered animation variants for lists
 */
export function useStaggerVariants(delay = 0.1) {
  const { prefersReducedMotion } = useAnimationVariants();

  return {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: prefersReducedMotion
          ? { duration: 0.01 }
          : {
              staggerChildren: delay,
              delayChildren: 0.1
            }
      }
    },
    item: {
      hidden: { 
        opacity: 0, 
        transform: 'translate3d(0, 16px, 0)' 
      },
      visible: { 
        opacity: 1, 
        transform: 'translate3d(0, 0, 0)',
        transition: prefersReducedMotion
          ? { duration: 0.01 }
          : { duration: 0.45, ease: 'easeOut' }
      }
    }
  };
}
