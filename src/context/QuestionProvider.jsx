import { useReducer } from "react";
import { QuestionContext, questionReducer } from "./QuestionContext";
import { initialState } from "../constants";

export const QuestionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(questionReducer, initialState);
  return (
    <QuestionContext.Provider value={{ state, dispatch }}>
      {children}
    </QuestionContext.Provider>
  );
};
