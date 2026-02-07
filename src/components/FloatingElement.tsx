import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FloatingElementProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  rotate?: number;
}

const FloatingElement = ({
  children,
  className = "",
  delay = 0,
  duration = 6,
  y = 20,
  rotate = 5,
}: FloatingElementProps) => {
  return (
    <motion.div
      className={className}
      initial={{ y: 0, rotateZ: 0 }}
      animate={{
        y: [-y / 2, y / 2, -y / 2],
        rotateZ: [-rotate / 2, rotate / 2, -rotate / 2],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      }}
    >
      {children}
    </motion.div>
  );
};

export default FloatingElement;
