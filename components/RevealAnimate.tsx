"use client";

import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

export function Reveal({ children }:{children:React.ReactNode}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      variants={{
        initial: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="initial"
      animate={mainControls}
      transition={{ duration: 0.5, delay: 0.25 }}
    
    >
      {children}
    </motion.div>
  );
}

export function SideAnimation({ children}:{children:React.ReactNode}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.span
      ref={ref}
      variants={{
        initial: { opacity: 0, x: -60 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="initial"
      animate={mainControls}
      transition={{ duration: 0.5, delay: 0.25 }}
      className={`inline-block `}
    >
      {children}
    </motion.span>
  );
}
