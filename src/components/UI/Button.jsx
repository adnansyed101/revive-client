import { motion } from "motion/react";

const Button = (props = {}) => {
  const { children, ...rest } = props || {};
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.90, rotate: "2.5deg" }}
      {...rest}
      transition={{
        duration: 0.15,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.button>
  );
};

export default Button;
