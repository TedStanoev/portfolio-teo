'use client';

import { AnimatePresence, motion, useInView, Variants } from 'motion/react';
import { useMemo, useRef } from 'react';

interface BlurFadeContainerProps {
  children: React.ReactNode;
  className?: string;
  variant?: {
    hidden: { y: number };
    visible: { y: number };
  };
  duration?: number;
  delay?: number;
  yOffset?: number;
  inViewMargin?: string;
  blur?: string;
  animateOnView?: boolean;
}
const BlurFadeContainer = ({
  children,
  className,
  variant,
  duration = 0.4,
  delay = 0,
  yOffset = 6,
  blur = '6px',
  animateOnView = false,
}: BlurFadeContainerProps) => {
  const ref = useRef(null);
  const inViewResult = useInView(ref, { once: true, margin: '-50px' });

  const isInView = useMemo(
    () => (animateOnView ? inViewResult : true),
    [animateOnView, inViewResult]
  );
  const defaultVariants: Variants = {
    hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})` },
    visible: { y: -yOffset, opacity: 1, filter: `blur(0px)` },
  };
  const combinedVariants = variant || defaultVariants;
  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        exit="hidden"
        variants={combinedVariants}
        transition={{
          delay: 0.04 + delay,
          duration,
          ease: 'easeOut',
        }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default BlurFadeContainer;
