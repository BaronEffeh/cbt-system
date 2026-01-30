import React, { useEffect, useState, useCallback } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Radio,
  Stack,
} from "@mui/material";

// MOCK QUESTIONS
const mockQuestions = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  question: `Question ${i + 1}: Simplify 3x + 5x - 4x`,
  options: ["4x", "12x", "8x", "x"],
}));

const ExamPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(3600);

  // Make submitExam stable
  const submitExam = useCallback(() => {
    console.log("Submitted answers:", answers);
    alert("Exam submitted successfully!");
  }, [answers]);

  // Include submitExam in dependency array
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          submitExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [submitExam]);

  const formatTime = (seconds) => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  const handleAnswer = (option) => {
    setAnswers((prev) => ({
      ...prev,
      [currentIndex]: option,
    }));
  };

  const question = mockQuestions[currentIndex];

  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={3} wrap="nowrap">
        {/* Question */}
        <Grid item xs={12} md={9}>
          <Card>
            <CardContent
              sx={{
                bgcolor: "#F9F9F6",
                border: "1px solid #D1D1CF",
                height: "500px",
                // width: "820px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Question stays at the top */}
              <Typography mb={2}>{question.question}</Typography>

              {/* Options pushed to the bottom */}
              <Box sx={{ mt: "auto" }}>
                <Grid container spacing={2}>
                  {question.options.map((opt) => (
                    <Grid item xs={12} sm={6} key={opt}>
                      <Box
                        sx={{
                          width: "383px",
                          height: "25px",
                          border: "1px solid #ddd",
                          borderRadius: 2,
                          p: 1,
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Radio
                          checked={answers[currentIndex] === opt}
                          onChange={() => handleAnswer(opt)}
                        />
                        <Typography>{opt}</Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Side panel */}
        <Grid item xs={12} md={3} sx={{width: "500px"}}>
          <Stack spacing={2} alignItems="center">
            <Typography 
              color="green" 
              fontWeight="bold" 
              sx={{
                border: "1px solid #D1D1CF",
                borderRadius: "4px", 
                pl: 8, pr: 8, pt: 1, pb: 1
              }}>
              {formatTime(timeLeft)}
            </Typography>

            <Grid container spacing={1}>
              {mockQuestions.map((_, index) => (
                <Grid item xs={3} key={index}>
                  <Button
                    size="small"
                    variant={
                      index === currentIndex ? "contained" : "outlined"
                    }
                    onClick={() => setCurrentIndex(index)}
                  >
                    {index + 1}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Grid>
      </Grid>

      {/* Navigation */}
      <Box
        sx={{
          mt: 4,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button
          variant="outlined"
          disabled={currentIndex === 0}
          onClick={() => setCurrentIndex((i) => i - 1)}
        >
          Previous
        </Button>

        {currentIndex === mockQuestions.length - 1 ? (
          <Button variant="contained" color="error" onClick={submitExam}>
            Submit Exam
          </Button>
        ) : (
          <Button
            variant="contained"
            onClick={() => setCurrentIndex((i) => i + 1)}
          >
            Next
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default ExamPage;
