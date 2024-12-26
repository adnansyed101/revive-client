import { motion } from "motion/react";

const List = (props = {}) => {
  const { children, ...rest } = props || {};
  return (
    <motion.li
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.9 }}
      {...rest}
      transition={{
        duration: 0.15,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.li>
  );
};

export default List;
