"use client";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const StatsComponent = ({ number }: { number: number }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, transition: { duration: 1 } });
    } else {
      controls.start({ opacity: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.div ref={ref} initial={{ opacity: 0 }} animate={controls}>
      {inView && (
        <div className="flex items-center justify-center">
          <CountUp
            start={0}
            end={number}
            duration={2.5}
            className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600"
          />
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
            {"+"}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default StatsComponent;
