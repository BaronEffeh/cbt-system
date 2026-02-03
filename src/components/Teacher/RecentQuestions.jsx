import React from "react";
import { Box, Typography, Card, Stack, Chip } from "@mui/material";

const questions = [
  { subject: "Mathematics", class: "Middle Class 1", count: 150, date: "12/10/2025 01:14pm", active: true },
  { subject: "Mathematics", class: "Middle Class 1", count: 28, date: "12/10/2025 01:14pm" },
  { subject: "Mathematics", class: "Middle Class 1", count: 122, date: "12/10/2025 01:14pm" },
];

const RecentQuestions = () => {
  return (
    <Box>
      <Typography variant="h6" mb={2}>
        Recently Added Questions
      </Typography>

      <Stack spacing={2}>
        {questions.map((q, index) => (
          <Card
            key={index}
            sx={{
              p: 2,
              borderRadius: 2,
              border: "1px solid #E6EAF0",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography fontWeight="500">
                {q.subject} - {q.class}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {q.date}
              </Typography>
            </Box>

            <Chip
              label={`${q.count} Questions`}
              sx={{
                bgcolor: q.active ? "#FFD84D" : "#E0E0E0",
                fontWeight: "500",
              }}
            />
          </Card>
        ))}
      </Stack>
    </Box>
  );
};

export default RecentQuestions;






// import React from "react";
// import {
//   Box,
//   Typography,
//   Table,
//   TableHead,
//   TableRow,
//   TableCell,
//   TableBody,
//   Chip,
// } from "@mui/material";

// const rows = [
//   {
//     subject: "Mathematics",
//     class: "Middle Class 1",
//     questions: 50,
//     edited: "12/10/2025 01:14pm",
//     status: "Active",
//   },
//   {
//     subject: "Mathematics",
//     class: "Middle Class 1",
//     questions: 50,
//     edited: "12/10/2025 01:14pm",
//     status: "Draft",
//   },
//   {
//     subject: "Mathematics",
//     class: "Middle Class 1",
//     questions: 50,
//     edited: "12/10/2025 01:14pm",
//     status: "Draft",
//   },
//   {
//     subject: "Mathematics",
//     class: "Middle Class 1",
//     questions: 50,
//     edited: "12/10/2025 01:14pm",
//     status: "Draft",
//   },
//   {
//     subject: "Mathematics",
//     class: "Middle Class 1",
//     questions: 50,
//     edited: "12/10/2025 01:14pm",
//     status: "Active",
//   },
// ];

// const statusColor = (status) =>
//   status === "Active" ? "success" : "default";

// const RecentQuestionTable = () => {
//   return (
//     <Box>
//       <Typography variant="h6" mb={2}>
//         Recent Question Sets
//       </Typography>

//       <Table>
//         <TableHead sx={{ bgcolor: "#C9C9C9" }}>
//           <TableRow>
//             <TableCell>Subject</TableCell>
//             <TableCell>Class</TableCell>
//             <TableCell>Number of Questions</TableCell>
//             <TableCell>Last Edited</TableCell>
//             <TableCell>Status</TableCell>
//           </TableRow>
//         </TableHead>

//         <TableBody>
//           {rows.map((row, index) => (
//             <TableRow key={index}>
//               <TableCell>{row.subject}</TableCell>
//               <TableCell>{row.class}</TableCell>
//               <TableCell>{row.questions}</TableCell>
//               <TableCell>{row.edited}</TableCell>
//               <TableCell>
//                 <Chip
//                   label={row.status}
//                   color={statusColor(row.status)}
//                   size="small"
//                 />
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </Box>
//   );
// };

// export default RecentQuestionTable;
