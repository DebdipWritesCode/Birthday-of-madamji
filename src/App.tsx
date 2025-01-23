import { useState } from "react";
import Background from "./components/Background";
import InitialCard from "./components/InitialCard";
import BirthdayCard from "./components/BirthdayCard";

function App() {
  const [currentState, setCurrentState] = useState<"initial" | "birthday">(
    "initial"
  );

  return (
    <div>
      {
        currentState === "initial" ? <Background /> : null
      }
      {currentState === "initial" ? (
        <InitialCard setCurrentState={setCurrentState} />
      ) : (
        <BirthdayCard setCurrentState={setCurrentState} />
      )}
    </div>
  );
}

export default App;
