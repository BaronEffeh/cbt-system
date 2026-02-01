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

  const submitExam = useCallback(() => {
    console.log("Submitted answers:", answers);
    alert("Exam submitted successfully!");
  }, [answers]);

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
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography mb={2}>{question.question}</Typography>

              {/* Options */}
              <Box sx={{ mt: "auto" }}>
                <Grid container spacing={2} sx={{justifyContent: "center"}}>
                  {question.options.map((opt) => {
                    const isSelected = answers[currentIndex] === opt;

                    return (
                      <Grid item xs={12} sm={6} key={opt}>
                        <Box
                          onClick={() => handleAnswer(opt)}
                          sx={{
                            cursor: "pointer",
                            width: "383px",
                            height: "25px",
                            borderRadius: "8px",
                            px: 2,
                            py: 1,
                            display: "flex",
                            alignItems: "center",
                            gap: 1,

                            bgcolor: isSelected ? "#E6ECF3" : "#FFFFFF",
                            border: `1px solid ${
                              isSelected ? "#003366" : "#D1D1CF"
                            }`,

                            "&:hover": {
                              bgcolor: "#F3F6FA",
                            },
                          }}
                        >
                          <Radio
                            checked={isSelected}
                            sx={{
                              color: "#003366",
                              "&.Mui-checked": {
                                color: "#003366",
                              },
                            }}
                          />
                          <Typography>{opt}</Typography>
                        </Box>
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Side panel */}
        <Grid item xs={12} md={3} sx={{ width: "550px" }}>
          <Stack spacing={2} alignItems="center">
            <Typography
              fontWeight="bold"
              sx={{
                color: "green",
                bgcolor: "#FAFAF7",
                border: "1px solid #D1D1CF",
                borderRadius: "4px",
                px: 15,
                py: 2,
              }}
            >
              {formatTime(timeLeft)}
            </Typography>

            <Grid
              container
              spacing={1}
              sx={{
                bgcolor: "#FAFAF7",
                border: "1px solid #D1D1CF",
                borderRadius: "4px",
                justifyContent: "center",
                py: 2,
              }}
            >
              {mockQuestions.map((_, index) => {
                const isAnswered = answers[index] !== undefined;
                const isCurrent = index === currentIndex;

                return (
                  <Grid item xs={3} key={index}>
                    <Button
                      size="small"
                      onClick={() => setCurrentIndex(index)}
                      sx={{
                        minWidth: "45px",
                        borderRadius: "2px",
                        border: "1px solid #D1D1CF",
                        bgcolor: isCurrent
                          ? "#003366"
                          : isAnswered
                          ? "#5EC967"
                          : "transparent",
                        color:
                          isCurrent || isAnswered ? "#F9F9F6" : "#000",
                      }}
                    >
                      {index + 1}
                    </Button>
                  </Grid>
                );
              })}
            </Grid>
          </Stack>
        </Grid>
      </Grid>

      {/* Navigation */}
      <Box sx={{ mt: 4, display: "flex", justifyContent: "space-between" }}>
        <Button
          variant="outlined"
          color="#090909"
          sx={{
            borderRadius: "16px",
            bgcolor: "#FCFCFA",
            border: "1px solid #003366",
          }}
          disabled={currentIndex === 0}
          onClick={() => setCurrentIndex((i) => i - 1)}
        >
          Previous
        </Button>

        <Button
          variant="contained"
          sx={{
            borderRadius: "16px",
            bgcolor: "#002244",
            "&:hover": { bgcolor: "#003366" },
          }}
          onClick={
            currentIndex === mockQuestions.length - 1
              ? submitExam
              : () => setCurrentIndex((i) => i + 1)
          }
        >
          {currentIndex === mockQuestions.length - 1 ? "Submit" : "Next"}
        </Button>
      </Box>
    </Box>
  );
};

export default ExamPage;





// import React, { useEffect, useState, useCallback } from "react";
// import {
//   Box,
//   Typography,
//   Button,
//   Grid,
//   Card,
//   CardContent,
//   Radio,
//   Stack,
// } from "@mui/material";

// // MOCK QUESTIONS
// const mockQuestions = Array.from({ length: 50 }, (_, i) => ({
//   id: i + 1,
//   question: `Question ${i + 1}: Simplify 3x + 5x - 4x`,
//   options: ["4x", "12x", "8x", "x"],
// }));

// const ExamPage = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [answers, setAnswers] = useState({});
//   const [timeLeft, setTimeLeft] = useState(3600);

//   // Make submitExam stable
//   const submitExam = useCallback(() => {
//     console.log("Submitted answers:", answers);
//     alert("Exam submitted successfully!");
//   }, [answers]);

//   // Include submitExam in dependency array
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft((prev) => {
//         if (prev <= 1) {
//           clearInterval(timer);
//           submitExam();
//           return 0;
//         }
//         return prev - 1;
//       });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [submitExam]);

//   const formatTime = (seconds) => {
//     const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
//     const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
//     const s = String(seconds % 60).padStart(2, "0");
//     return `${h}:${m}:${s}`;
//   };

//   const handleAnswer = (option) => {
//     setAnswers((prev) => ({
//       ...prev,
//       [currentIndex]: option,
//     }));
//   };

//   const question = mockQuestions[currentIndex];

//   return (
//     <Box sx={{ p: 3 }}>
//       <Grid container spacing={3} wrap="nowrap">
//         {/* Question */}
//         <Grid item xs={12} md={9}>
//           <Card>
//             <CardContent
//               sx={{
//                 bgcolor: "#F9F9F6",
//                 border: "1px solid #D1D1CF",
//                 height: "500px",
//                 // width: "820px",
//                 display: "flex",
//                 flexDirection: "column",
//               }}
//             >
//               {/* Question stays at the top */}
//               <Typography mb={2}>{question.question}</Typography>

//               {/* Options pushed to the bottom */}
//               <Box sx={{ mt: "auto" }}>
//                 <Grid container spacing={2}>
//                   {question.options.map((opt) => (
//                     <Grid item xs={12} sm={6} key={opt}>
//                       <Box
//                         sx={{
//                           width: "383px",
//                           height: "25px",
//                           border: "1px solid #ddd",
//                           borderRadius: 2,
//                           p: 1,
//                           display: "flex",
//                           alignItems: "center",
//                         }}
//                       >
//                         <Radio
//                           checked={answers[currentIndex] === opt}
//                           onChange={() => handleAnswer(opt)}
//                         />
//                         <Typography>{opt}</Typography>
//                       </Box>
//                     </Grid>
//                   ))}
//                 </Grid>
//               </Box>
//             </CardContent>
//           </Card>
//         </Grid>

//         {/* Side panel */}
//         <Grid item xs={12} md={3} sx={{width: "550px"}}>
//           <Stack spacing={2} alignItems="center">
//             <Typography 
//               color="green" 
//               fontWeight="bold" 
//               sx={{
//                 bgcolor: "#FAFAF7",
//                 border: "1px solid #D1D1CF",
//                 borderRadius: "4px", 
//                 pl: 15, pr: 15, pt: 2, pb: 2
//               }}>
//               {formatTime(timeLeft)}
//             </Typography>

//             <Grid 
//             container 
//             spacing={1} 
//             sx={{
//               bgcolor: "#FAFAF7",
//               border: "1px solid #D1D1CF", 
//               borderRadius: "4px", 
//               justifyContent: "center", 
//               pt: "16px", pb: "16px"
//             }}>
//               {mockQuestions.map((_, index) => {
//                 const isAnswered = answers[index] !== undefined;
//                 const isCurrent = index === currentIndex;

//                 return (
//                   <Grid item xs={3} key={index}>
//                     <Button
//                       size="small"
//                       onClick={() => setCurrentIndex(index)}
//                       sx={{
//                         minWidth: "45px",
//                         borderRadius: "2px",
//                         border: "1px solid #D1D1CF",

//                         bgcolor: isCurrent
//                           ? "#003366"
//                           : isAnswered
//                           ? "#5EC967"
//                           : "transparent",

//                         color: isCurrent || isAnswered ? "#F9F9F6" : "#000",

//                         "&:hover": {
//                           bgcolor: isCurrent
//                             ? "#003366"
//                             : isAnswered
//                             ? "#5EC967"
//                             : "#F1F1EE",
//                         },
//                       }}
//                     >
//                       {index + 1}
//                     </Button>
//                   </Grid>
//                 );
//               })}
//             </Grid>
//           </Stack>
//         </Grid>
//       </Grid>

//       {/* Navigation */}
//       <Box
//         sx={{
//           mt: 4,
//           display: "flex",
//           justifyContent: "space-between",
//         }}
//       >
//         <Button
//           variant="outlined"
//           color="#090909"
//           sx={{
//             borderRadius: "16px",
//             bgcolor: "#FCFCFA", 
//             border: "1px solid #003366"
//           }}
//           disabled={currentIndex === 0}
//           onClick={() => setCurrentIndex((i) => i - 1)}
//         >
//           Previous
//         </Button>

//         {currentIndex === mockQuestions.length - 1 ? (
//           <Button 
//             variant="contained" 
//             sx={{
//               borderRadius: "16px",
//               bgcolor: "#003366",
//               "&:hover": {
//                 bgcolor: "#002244",
//               },
//             }}
//             onClick={submitExam}
//           >
//             Submit
//           </Button>
//         ) : (
//           <Button
//             variant="contained"
//             sx={{
//               borderRadius: "16px",
//               bgcolor: "#003366",
//               "&:hover": {
//                 bgcolor: "#002244",
//               },
//             }}
//             onClick={() => setCurrentIndex((i) => i + 1)}
//           >
//             Next
//           </Button>
//         )}
//       </Box>
//     </Box>
//   );
// };

// export default ExamPage;
