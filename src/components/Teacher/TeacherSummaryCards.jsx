import React from "react";
import { Typography, Card, Stack, Box, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const TeacherSummaryCards = () => {
  return (
    <Stack direction={{ xs: "column", md: "row" }} spacing={3} mb={4} sx={{height: "184px"}}>
      {/* Total Questions */}
      <Card
        sx={{
          justifyItems: "center",
          alignContent: "center",
          width: 200,
          bgcolor: "#FFFCEB",
          border: "1px solid #FFF1A3",
          borderRadius: 3,
          p: 3,
        }}
      >
        <Typography variant="body2" color="text.secondary">
          Total Questions Created
        </Typography>
        <Typography variant="h3" fontWeight="bold" mt={2}>
          450
        </Typography>
      </Card>

      {/* Difficulty Breakdown */}
      <Card
        sx={{
          flex: 1,
          bgcolor: "#D9F5DB",
          border: "1px solid #BCEBC0",
          borderRadius: 3,
          p: 3,
        }}
      >
        <Typography variant="body2" color="text.secondary" mb={2} sx={{textAlign: "center"}}>
          Questions Difficulty Breakdown
        </Typography>

        <Stack direction="row" justifyContent="space-between">
          {[
            { label: "Easy", value: 150 },
            { label: "Medium", value: 150 },
            { label: "Hard", value: 150 },
          ].map((item) => (
            <Box key={item.label} textAlign="center">
              <Typography variant="body2">{item.label}</Typography>
              <Typography variant="h6" fontWeight="bold">
                {item.value}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Card>

      {/* Create Question Set */}
      <Card
        sx={{
          width: 300,
          bgcolor: "#FFDD29",
          color: "#0E0E0E",
          borderRadius: 3,
          p: 3,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          Create New <br /> Question Set
        </Typography>

        <IconButton
          sx={{
            bgcolor: "#0E0E0E",
            color: "#FFDD29",
            "&:hover": { bgcolor: "#2b2929", border: "1px solid #2b2929" },
          }}
        >
          <AddIcon />
        </IconButton>
      </Card>
    </Stack>
  );
};

export default TeacherSummaryCards;






// import React from "react";
// import { Typography, Card, Stack, IconButton } from "@mui/material";
// import AddIcon from "@mui/icons-material/Add";

// const TeacherSummaryCards = () => {
//   return (
//     <Stack direction={{ xs: "column", md: "row" }} spacing={3} mb={4}>
//       {/* Total Questions */}
//       <Card
//         sx={{
//           width: 220,
//           height: 130,
//           bgcolor: "#FFFCEB",
//           border: "1px solid #FFF1A3",
//           borderRadius: 3,
//           p: 2,
//         }}
//       >
//         <Typography variant="body2" color="text.secondary">
//           Total Questions Created
//         </Typography>
//         <Typography variant="h4" fontWeight="bold" mt={2}>
//           450
//         </Typography>
//       </Card>

//       {/* Pass Percentage */}
//       <Card
//         sx={{
//           width: 220,
//           height: 130,
//           bgcolor: "#D1F0D4",
//           border: "1px solid #AAE2AF",
//           borderRadius: 3,
//           p: 2,
//         }}
//       >
//         <Typography variant="body2" color="text.secondary">
//           Pass Percentage
//         </Typography>
//         <Typography variant="h4" fontWeight="bold" mt={2}>
//           85%
//         </Typography>
//       </Card>

//       {/* Create Assessment */}
//       <Card
//         sx={{
//           flex: 1,
//           height: 130,
//           bgcolor: "#29547E",
//           color: "#fff",
//           borderRadius: 3,
//           p: 2,
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           cursor: "pointer",
//         }}
//       >
//         <Typography variant="h6" fontWeight="bold">
//           Create New <br /> Assessment
//         </Typography>

//         <IconButton
//           sx={{
//             bgcolor: "#fff",
//             color: "#2B567F",
//             "&:hover": { bgcolor: "#f0f0f0" },
//           }}
//         >
//           <AddIcon />
//         </IconButton>
//       </Card>
//     </Stack>
//   );
// };

// export default TeacherSummaryCards;
