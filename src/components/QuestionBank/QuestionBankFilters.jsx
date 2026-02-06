// components/QuestionBank/QuestionBankFilters.jsx
import React from "react";
import {
  Box,
  TextField,
  Button,
  MenuItem,
  Stack,
} from "@mui/material";

const QuestionBankFilters = () => {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={2}
      alignItems={{ md: "flex-end" }}
      mb={3}
    >
      <Box>
        <TextField label="Subject" placeholder="Subject" size="small" />
      </Box>

      <Box>
        <TextField select label="Class" size="small" sx={{ width: 160 }}>
          <MenuItem value="">Class</MenuItem>
          <MenuItem value="Middle Class 1">Middle Class 1</MenuItem>
          <MenuItem value="Middle Class 2">Middle Class 2</MenuItem>
        </TextField>
      </Box>

      <Box>
        <TextField select label="Session" size="small" sx={{ width: 160 }}>
          <MenuItem value="">Session</MenuItem>
          <MenuItem value="2024/2025">2024/2025</MenuItem>
          <MenuItem value="2025/2026">2025/2026</MenuItem>
        </TextField>
      </Box>

      <Button
        variant="contained"
        sx={{
          bgcolor: "#FFD600",
          color: "#000",
          "&:hover": { bgcolor: "#F5C800" },
        }}
      >
        Sort
      </Button>

      <Button
        variant="outlined"
        sx={{
          ml: "auto",
          borderColor: "#FFD600",
          color: "#000",
          "&:hover": { borderColor: "#F5C800" },
        }}
      >
        Create
      </Button>
    </Stack>
  );
};

export default QuestionBankFilters;
