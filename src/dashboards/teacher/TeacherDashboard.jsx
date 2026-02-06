import React from "react";
import { Box, Grid } from "@mui/material";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import TeacherSummaryCards from "../../components/Teacher/TeacherSummaryCards";
import RecentQuestions from "../../components/Teacher/RecentQuestions";
import StudentsPerClass from "../../components/Teacher/StudentsPerClass";
import QuestionBank from "../../pages/teacher/QuestionBank";

const TeacherDashboard = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar role="teacher" />

      <Box sx={{ flex: 1, ml: "240px", p: 3 }}>
        <Header
          name="Mr. Alfred"
          subtitle="This portal allows you to create, edit, and manage exam questions for your subject(s)."
        />

        <TeacherSummaryCards />

        <Grid container spacing={3}>
          <Grid item xs={12} md={7} sx={{width: "45%"}}>
            <RecentQuestions />
          </Grid>

          <Grid item xs={12} md={5} sx={{width: "45%"}}>
            <StudentsPerClass />
          </Grid>

          <Grid item xs={12} md={5} sx={{width: "45%"}}>
            <QuestionBank />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default TeacherDashboard;





// import React from "react";
// import { Box } from "@mui/material";
// import Sidebar from "../../components/Sidebar/Sidebar";
// import Header from "../../components/Header/Header";
// import TeacherSummaryCards from "../../components/Teacher/TeacherSummaryCards";
// import RecentQuestionTable from "../../components/Teacher/RecentQuestionTable";

// const TeacherDashboard = () => {
//   return (
//     <Box sx={{ display: "flex", ml: "240px", p: 3 }} >
//       <Sidebar role="teacher" />

//       <Box sx={{ flex: 1, p: 3 }}>
//         <Header
//           name="Mr. Alfred"
//           subtitle="This portal allows you to create, edit, and manage exam questions for your subject(s)."
//         />

//         <TeacherSummaryCards />
//         <RecentQuestionTable />
//       </Box>
//     </Box>
//   );
// };

// export default TeacherDashboard;






// import React from "react";
// import { Box } from "@mui/material";
// import Sidebar from "../../components/Sidebar/Sidebar";
// import Header from "../../components/Header/Header";

// const TeacherDashboard = () => {
//   return (
//     <Box sx={{ display: "flex" }}>
//       <Sidebar role="teacher" />
//       <Box sx={{ flex: 1, p: 3 }}>
//         {/* Teacher content */}
//         {/* Header */}
//         <Header 
//           name="Mr. Alfred"
//           subtitle="This portal allows you to create, edit, and manage exam questions for your 
//           subject(s). Please ensure all questions are accurate and complete before saving."
//         />
//       </Box>
//     </Box>
//   );
// };

// export default TeacherDashboard;
