import React from "react";
import { Box, Grid } from "@mui/material";
import Sidebar from "../../components/Sidebar/Sidebar";
import ExamCard from "../../components/ExamCard";
import Header from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";
import { exams as mockExams } from "../../data/exams";

const StudentDashboard = () => {
  const navigate = useNavigate();

  const hasOngoingExam = mockExams.some(
    (exam) => exam.status === "ongoing"
  );

  const processedExams = mockExams.map((exam) => {
    if (hasOngoingExam && exam.status === "available") {
      return { ...exam, status: "locked" };
    }
    return exam;
  });

  const handleExamClick = (exam) => {
    if (exam.status === "available" || exam.status === "ongoing") {
      navigate(`/student/exam/${exam.id}/instructions`);
    }

    if (exam.status === "completed") {
      navigate(`/student/result/${exam.id}`);
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar role="student" />

      <Box sx={{ flex: 1, p: 3 }}>
        <Header
          name="Effeh"
          subtitle="Welcome to the Exams Portal. Hope you're ready for excellence?!"
        />

        <Grid container spacing={3}>
          {processedExams.map((exam) => (
            <Grid item key={exam.id}>
              <ExamCard
                subject={exam.subject}
                questions={exam.questions}
                duration={exam.duration}
                status={exam.status}
                onClick={() => handleExamClick(exam)}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default StudentDashboard;
