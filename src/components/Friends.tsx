import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "framer-motion";

const Friends = () => {
  return (
    <motion.div
      className="flex absolute w-full justify-between gap-10 bottom-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}>
      <DotLottieReact
        src="https://lottie.host/9c8108cd-87a3-4c55-8c49-20a36b441a42/GNQ0iJ4cvr.lottie"
        loop
        autoplay
        className="top-0 w-[600px] h-[400px] "
      />
      <DotLottieReact
        src="https://lottie.host/9c8108cd-87a3-4c55-8c49-20a36b441a42/GNQ0iJ4cvr.lottie"
        loop
        autoplay
        className="top-0 w-[600px] h-[400px]"
      />
    </motion.div>
  );
};

export default Friends;
