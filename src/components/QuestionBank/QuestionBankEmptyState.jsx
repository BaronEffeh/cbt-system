// components/QuestionBank/QuestionBankEmptyState.jsx
import React from "react";
import { Box, Typography, Button } from "@mui/material";

const QuestionBankEmptyState = () => {
  return (
    <Box
      sx={{
        border: "1px solid #E0E0E0",
        borderRadius: 3,
        py: 8,
        textAlign: "center",
      }}
    >
      <Typography variant="h6" mb={1}>
        Your Question Bank Is Empty
      </Typography>
      <Typography color="text.secondary" mb={3}>
        Questions you create here will be available for future exams.
        <br />
        Click below to add your first question.
      </Typography>

      <Button
        variant="contained"
        sx={{
          bgcolor: "#FFD600",
          color: "#000",
          "&:hover": { bgcolor: "#F5C800" },
        }}
      >
        Create new question
      </Button>
    </Box>
  );
};

export default QuestionBankEmptyState;
