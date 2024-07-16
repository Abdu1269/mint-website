// components/AnimatedComponent.tsx
import { motion, useAnimation, Variants } from "framer-motion";
import { useEffect, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import { animationVariants } from "./animationVariants";
import { debounce } from "./animationDebounce";

interface AnimatedComponentProps {
  children: React.ReactNode;
  animationName: keyof typeof animationVariants;
}

const AnimatedComponent: React.FC<AnimatedComponentProps> = ({
  children,
  animationName,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const handleInViewChange = useCallback(
    debounce((inView: boolean) => {
      if (inView) {
        controls.start("visible");
      } else {
        controls.start("hidden");
      }
    }, 100), // Debounce delay in milliseconds
    [controls]
  );

  useEffect(() => {
    handleInViewChange(inView);

    return () => {
      controls.stop();
    };
  }, [controls, inView, handleInViewChange]);

  const variants: Variants = animationVariants[animationName];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="my-4"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedComponent;
