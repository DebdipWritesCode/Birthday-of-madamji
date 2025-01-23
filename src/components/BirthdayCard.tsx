import React, { useState } from "react";
import { motion } from "framer-motion";
import birthdaySong from "../assets/song.mp3";
import flags from "../assets/flags2.png";
import Balloons from "./Balloons";
import Cake from "./Cake";
import Friends from "./Friends";

interface BirthdayCardProps {
  setCurrentState: React.Dispatch<React.SetStateAction<"initial" | "birthday">>;
}

const instructions = [
  "Turn on lights",
  "Play music",
  "Decorate",
  "Fly the balloons",
  "Bring the cake",
  "Bring your friends",
  "See your special message",
];

const BirthdayCard: React.FC<BirthdayCardProps> = ({ setCurrentState }) => {
  const [lightsState, setLightsState] = useState<"on" | "off">("off");
  const [instructionIndex, setInstructionIndex] = useState(0);
  const [hasFlags, setHasFlags] = useState(false);
  const [hasBalloons, setHasBalloons] = useState(false);
  const [hasCake, setHasCake] = useState(false);
  const [hasFriends, setHasFriends] = useState(false);

  const lightsOffBgClasses =
    "bg-gradient-to-b from-black via-blue-950 to-sky-900 to-100%";
  const lightsOnBgClasses =
    "bg-gradient-to-b from-pink-400 via-fuchsia-300-200 to-white to-100%";

  const lightsOffButtonClasses = "bg-blue-600 text-white";
  const lightsOnButtonClasses = "bg-pink-600 text-white";

  const handleNextInstruction = () => {
    if (instructionIndex === 0) {
      setLightsState("on");
      setInstructionIndex(1);
    } else if (instructionIndex === 1) {
      const audio = new Audio(birthdaySong);
      audio.play();
      setInstructionIndex(2);
    } else if (instructionIndex === 2) {
      setHasFlags(true);
      setInstructionIndex(3);
    } else if (instructionIndex === 3) {
      setHasBalloons(true);
      setInstructionIndex(4);
    } else if (instructionIndex === 4) {
      setHasCake(true);
      setInstructionIndex(5);
    } else if (instructionIndex === 5) {
      setHasFriends(true);
      setInstructionIndex(6);
    }
  };

  return (
    <div
      className={`w-full h-screen ${
        lightsState === "off" ? lightsOffBgClasses : lightsOnBgClasses
      } flex justify-center items-start`}>
      <motion.button
        whileTap={{ scale: 0.85 }}
        onClick={handleNextInstruction}
        className={`py-2 px-16 text-xl font-semibold rounded-xl mt-20 z-50 ${
          lightsState === "off" ? lightsOffButtonClasses : lightsOnButtonClasses
        }`}>
        {instructions[instructionIndex]}
      </motion.button>
      {hasFlags && (
        <div className="absolute -top-[50px] left-0 w-full h-full flex justify-center items-center">
          <motion.img
            className="w-[800px] h-[400px] z-10"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            src={flags}
            alt="flags"
          />
        </div>
      )}
      {hasBalloons && <Balloons />}
      {hasCake && <Cake />}
      {hasFriends && <Friends />}
    </div>
  );
};

export default BirthdayCard;
