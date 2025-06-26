import React, { useContext } from "react";
import Hero from "../hero/Hero";
import Questions from "../questions/Questions";
import { QuestionContext } from "../../context/QuestionContext";
import Results from "../results/Results";

const Main = () => {
  const { state } = useContext(QuestionContext);

  if (state.completed) {
    return <Results answers={state.answers} />;
  }
  return (
    <main>
      <Hero />
      <Questions />
    </main>
  );
};

export default Main;
