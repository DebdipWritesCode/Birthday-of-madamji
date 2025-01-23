import { useState } from "react";
import Background from "./components/Background";
import InitialCard from "./components/InitialCard";
import BirthdayCard from "./components/BirthdayCard";
import SecretMessage from "./components/SecretMessage";

function App() {
  const [currentState, setCurrentState] = useState<
    "initial" | "birthday" | "final_message"
  >("initial");

  let content: JSX.Element | null;
  switch (currentState) {
    case "initial":
      content = <InitialCard setCurrentState={setCurrentState} />;
      break;
    case "birthday":
      content = <BirthdayCard setCurrentState={setCurrentState} />;
      break;
    case "final_message":
      content = <SecretMessage />;
      break;
    default:
      content = null;
  }

  return (
    <div>
      {currentState === "initial" && <Background />}
      {content}
    </div>
  );
}

export default App;