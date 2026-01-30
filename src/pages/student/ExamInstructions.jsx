import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Typography,
  Stack,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { exams, EXAM_INSTRUCTIONS } from "../../data/exams";
import { useState } from "react";
import { useExam } from "../../context/ExamContext";

const ExamInstructions = () => {
  const { examId } = useParams();
  const navigate = useNavigate();
  const { ongoingExamId, setOngoingExamId } = useExam();
  const [checked, setChecked] = useState(false);

  const exam = exams.find((e) => e.id === examId);
  if (!exam) return <p>Exam not found</p>;

  const handleStart = () => {
    if (ongoingExamId && ongoingExamId !== examId) {
      alert("You already have an ongoing exam.");
      return;
    }
    setOngoingExamId(examId);
    navigate(`/student/exam/${examId}/start`);
  };

  return (
    <Box sx={{ p: 4, maxWidth: 900, mx: "auto" }}>
      <Stack direction="row" spacing={3} alignItems="center" sx={{ mb: 4 }}>
         <Stack direction="row" spacing={1} alignItems="center">
           <MenuBookIcon fontSize="small" />
           <Typography>{exam.subject}</Typography>
         </Stack>

         <Stack direction="row" spacing={1} alignItems="center">
           <HelpOutlineIcon fontSize="small" />
           <Typography>{exam.questions} Questions</Typography>
         </Stack>

         <Stack direction="row" spacing={1} alignItems="center">
           <AccessTimeIcon fontSize="small" />
           <Typography>{exam.duration}</Typography>
         </Stack>
      </Stack>
      <Typography variant="h5" gutterBottom>
        Exam Instructions
      </Typography>

      <Typography variant="body1" sx={{ mb: -2 }}>
         Please read the instructions carefully before starting the exam.
      </Typography>

      <ol style={{ paddingLeft: "18px", 
                    color: "#555", 
                    fontSize: "16px", 
                    fontWeight: 400, 
                    lineHeight: "24px", 
                    letterSpacing: "0.5px" 
                }}>
        {EXAM_INSTRUCTIONS.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>

      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
              sx={{
                color: "",
                "&.Mui-checked": {
                  color: "#FFD700",
                },
              }}
          />
        }
        label="I have read and understood the instructions"
      />

      <Button
        variant="contained"
        sx={{
            bgcolor: "#FFD700",
            color: "#000",
            fontWeight: "bold",
            px: 4,
            "&:hover": { bgcolor: "#D6B500" },
          }}
        disabled={!checked}
        onClick={handleStart}
      >
        Start Exam
      </Button>
    </Box>
  );
};

export default ExamInstructions;





// import { Box, Typography, Button, Stack } from "@mui/material";
// import AccessTimeIcon from "@mui/icons-material/AccessTime";
// import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
// import MenuBookIcon from "@mui/icons-material/MenuBook";
// import { useNavigate, useParams } from "react-router-dom";
// import { exams } from "../../data/exams";

// const ExamInstructions = () => {
//   const navigate = useNavigate();
//   const { examId } = useParams();

// //   const { examId } = useParams();
//     const exam = exams.find((e) => e.id === examId);

//   return (
//     <Box sx={{ p: 4, maxWidth: 900, mx: "auto" }}>
//       {/* Exam Meta */}
//       <Stack direction="row" spacing={3} alignItems="center" sx={{ mb: 4 }}>
//         <Stack direction="row" spacing={1} alignItems="center">
//           <MenuBookIcon fontSize="small" />
//           <Typography>{exam.subject}</Typography>
//         </Stack>

//         <Stack direction="row" spacing={1} alignItems="center">
//           <HelpOutlineIcon fontSize="small" />
//           <Typography>{exam.questions} Questions</Typography>
//         </Stack>

//         <Stack direction="row" spacing={1} alignItems="center">
//           <AccessTimeIcon fontSize="small" />
//           <Typography>{exam.duration}</Typography>
//         </Stack>
//       </Stack>

//       {/* Instructions */}
//       <Typography variant="h6" sx={{ mb: 2 }}>
//         Exam Instructions
//       </Typography>

//       <Typography variant="body2" sx={{ mb: 2 }}>
//         Please read the instructions carefully before starting the exam.
//       </Typography>

//       <ol style={{ paddingLeft: "18px", 
//                     color: "#555", 
//                     fontSize: "16px", 
//                     fontWeight: 400, 
//                     lineHeight: "24px", 
//                     letterSpacing: "0.5px" 
//                 }}>
//         {exam.instructions.map((item, index) => (
//             <li key={index}>{item}</li>
//         ))}
//         </ol>

//       {/* Start Button */}
//       <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 4 }}>
//         <Button
//           variant="contained"
//           sx={{
//             bgcolor: "#FFD700",
//             color: "#000",
//             fontWeight: "bold",
//             px: 4,
//             "&:hover": { bgcolor: "#D6B500" },
//           }}
//           onClick={() => navigate(`/student/exam/${examId}`)}
//         >
//           Start Exam
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default ExamInstructions;
