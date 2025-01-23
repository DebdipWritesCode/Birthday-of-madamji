import { motion } from "framer-motion";

const SecretMessage = () => {
  return (
    <div className="bg-gradient-to-tr from-pink-500 via-rose-400 to-pink-200
 z-50 w-full h-screen flex justify-center items-center font-mono">
      <motion.div
        initial={{ position: "absolute", scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      className="bg-white shadow-2xl shadow-slate-600 rounded-2xl px-12 py-14 flex flex-col gap-4 mx-40 items-center">
        <h2 className="text-center mb-6 bg-pink-100 border-double border-[10px] border-pink-400 text-slate-800 rounded-lg p-4 shadow-2xl shadow-pink-400 text-2xl font-bold">
          Shhhh! It's a secret
        </h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
          className="text-justify font-sans text-xl text-slate-600 leading-10 ">
          First of all, a very, very happy birthday to you, madamji. I know I’ve
          probably annoyed you countless times, but truthfully, those moments
          are some of the most cherished memories of my life. When I look at you
          now, I don’t think, “I wish I had found her sooner.” Instead, I
          realize that the best things in life take time, and I’m so grateful
          that I finally found my everything in you. I know I don’t text you or
          check in with you every single day, but please believe me when I say
          that there isn’t a moment that goes by without you crossing my mind.
          I’m not the best at expressing my emotions, but deep down, you are and
          always will be the queen of my heart. No matter what life throws our
          way, I promise you’ll never have to face it alone. I’ll always be
          there for you, through thick and thin—you can count on me, always.
          That’s all for now, at least. Thank you for taking the time to read
          all of this. Once again, happiest birthday, my love. You mean the
          world to me and more. 🎉🎉🎉
        </motion.p>
      </motion.div>
    </div>
  );
};

export default SecretMessage;
