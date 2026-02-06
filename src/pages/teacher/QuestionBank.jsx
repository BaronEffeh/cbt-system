// pages/Teacher/QuestionBank.jsx
import React from "react";
import { Box, Typography } from "@mui/material";
import QuestionBankFilters from "../../components/QuestionBank/QuestionBankFilters";
import QuestionBankTable from "../../components/QuestionBank/QuestionBankTable";
import QuestionBankEmptyState from "../../components/QuestionBank/QuestionBankEmptyState";

const mockRows = [
  {
    subject: "Mathematics",
    class: "Middle Class 1",
    questions: 50,
    edited: "12/10/2025 01:40pm",
    status: "Published",
  },
  {
    subject: "Mathematics",
    class: "Middle Class 1",
    questions: 50,
    edited: "12/10/2025 01:40pm",
    status: "Draft",
  },
];

const QuestionBank = () => {
  const hasQuestions = mockRows.length > 0;

  return (
    <Box sx={{ flex: 1, ml: "240px", p: 3 }}>
      <Typography variant="h5" mb={3}>
        Question bank
      </Typography>

      <QuestionBankFilters />

      {hasQuestions ? (
        <QuestionBankTable rows={mockRows} />
      ) : (
        <QuestionBankEmptyState />
      )}
    </Box>
  );
};

export default QuestionBank;
