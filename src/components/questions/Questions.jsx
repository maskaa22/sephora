import { useContext, useEffect, useState } from "react";
import { questions } from "../../data";
import { QuestionContext } from "../../context/QuestionContext";
import c from "./Questions.module.css";
import { ANSWER } from "../../constants";

const Questions = () => {
  const { state, dispatch } = useContext(QuestionContext);
  const [animate, setAnimate] = useState(false);

  const question = questions[state.currentStep];

  const handleAnswer = (answer) => {
    dispatch({
      type: ANSWER,
      payload: { question: question.title, answer },
    });
  };

  useEffect(() => {
    setAnimate(false);
    const timer = setTimeout(() => setAnimate(true), 350);
    return () => clearTimeout(timer);
  }, [state.currentStep]);

  return (
    <section className={c.questions}>
      <div className={"container"}>
        <div
          className={`${c.innerContainer} ${c.cardEnter} ${
            animate ? c.cardEnterActive : ""
          }`}
        >
          <p
            className={c.title}
          >{`Question ${question.count} of ${questions.length}`}</p>
          <p className={c.text}>{question.title}</p>

          {question.variant.map((option, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(option)}
              className={c.send}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Questions;
