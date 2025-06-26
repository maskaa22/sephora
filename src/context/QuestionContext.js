import { createContext } from "react";
import { ANSWER } from "../constants";

export const QuestionContext = createContext();

export function questionReducer(state, action) {
  if (action.type === ANSWER) {
    const newAnswers = [...state.answers, action.payload];
    const isLast = state.currentStep === 2;

    return {
      ...state,
      answers: newAnswers,
      currentStep: state.currentStep + 1,
      completed: isLast,
    };
  }

  return state;
}
