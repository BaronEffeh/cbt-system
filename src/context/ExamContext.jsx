import React, { createContext, useContext, useState } from "react";

const ExamContext = createContext(null);

export const ExamProvider = ({ children }) => {
  const [ongoingExamId, setOngoingExamId] = useState(null);

  return (
    <ExamContext.Provider value={{ ongoingExamId, setOngoingExamId }}>
      {children}
    </ExamContext.Provider>
  );
};

export const useExam = () => useContext(ExamContext);
