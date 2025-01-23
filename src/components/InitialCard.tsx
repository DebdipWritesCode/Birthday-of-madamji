import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const InitialCard = () => {
  const texts = [
    "Hey, it's your birthday, Yaeyyy!",
    "And I have made something special for you, I hope you'll like it, madamji :-)",
    "Do you wanna see it?",
    "What if I say please? 🥺",
    "Please 🥺🥺🥺",
  ];

  const [shownText, setShownText] = useState(texts[0]);
  const [shownTextIndex, setShownTextIndex] = useState(0);

  const handleYesClick = () => {
    console.log("Yes clicked");
  };

  const handleNoClick = () => {
    const currentIndex = shownTextIndex;
    setShownTextIndex(currentIndex + 1);
    setShownText(texts[currentIndex + 1]);
  };

  useEffect(() => {
    for (let i = 0; i <= 2; i++) {
      setTimeout(() => {
        setShownTextIndex(i);
        setShownText(texts[i]);
      }, 5000 * i);
    }
  }, []);

  return (
    <div className="z-50 w-full h-screen flex justify-center items-center font-mono">
      <div className="bg-white opacity-75 rounded-2xl shadow-2xl px-7 py-10 w-[800px] shadow-purple-950 text-center flex gap-4 flex-col items-center">
        <p className="text-4xl">✨</p>
        <div className="text-2xl font-semibold text-slate-600">
          {shownText.split(" ").map((el, i) => (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              key={`${el}-${i}`}>
              {el}{" "}
            </motion.span>
          ))}
          {shownTextIndex === 2 || shownTextIndex === 3 ? (
            <div className=" flex gap-8 mt-6 items-center justify-center">
              <motion.button
                whileTap={{ scale: 0.85 }}
                onClick={handleYesClick}
                className=" bg-green-500 text-white px-3 py-2 rounded-md font-bold text-xl hover:bg-green-700">
                Yes
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.85 }}
                onClick={handleNoClick}
                className="bg-red-500 text-white px-3 py-2 rounded-md font-bold text-xl hover:bg-red-700">
                No
              </motion.button>
            </div>
          ) : null}
          {shownTextIndex === 4 ? (
            <div className=" flex gap-8 mt-6 items-center justify-center">
              <motion.button
                whileTap={{ scale: 0.85 }}
                onClick={handleYesClick}
                className=" bg-green-500 text-white px-3 py-2 rounded-md font-bold text-xl hover:bg-green-700">
                Please
              </motion.button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default InitialCard;
