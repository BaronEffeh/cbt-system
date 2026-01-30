import React from "react";
import { Routes, Route } from "react-router-dom";
import StudentDashboard from "./dashboards/student/StudentDashboard";
import TeacherDashboard from "./dashboards/teacher/TeacherDashboard";
import AdminDashboard from "./dashboards/admin/AdminDashboard";
import ExamInstructions from "./pages/student/ExamInstructions";
import ExamPage from "./pages/student/ExamPage";

function App() {
  return (
    <Routes>
      <Route path="/student/dashboard" element={<StudentDashboard />} />
      <Route
        path="/student/exam/:examId/instructions"
        element={<ExamInstructions />}
      />
      <Route path="/student/exam/:examId/start" element={<ExamPage />} />

      <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
    </Routes>
  );
}

export default App;





// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import StudentDashboard from "../src/dashboards/student/StudentDashboard";
// import TeacherDashboard from "./dashboards/teacher/TeacherDashboard";
// import AdminDashboard from "./dashboards/admin/AdminDashboard";
// import ExamInstructions from "./pages/student/ExamInstructions";

// function App() {
//   return (
//     <Routes>
//       <Route path="/student/dashboard" element={<StudentDashboard />} />
//       <Route path="/student/exam/:examId/instructions" element={<ExamInstructions />} />

//       <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
//       <Route path="/admin/dashboard" element={<AdminDashboard />} />
//     </Routes>
//   );
// }

// export default App;
