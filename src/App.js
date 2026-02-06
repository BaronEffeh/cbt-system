import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminDashboard from "./dashboards/admin/AdminDashboard";
// import TeacherDashboard from "./dashboards/teacher/TeacherDashboard";
// import QuestionBank from "./pages/teacher/QuestionBank";
import StudentDashboard from "./dashboards/student/StudentDashboard";
import ExamInstructions from "./pages/student/ExamInstructions";
import ExamPage from "./pages/student/ExamPage";
import Login from "./pages/Login/Login";

import ProtectedRoute from "./auth/ProtectedRoute";
import TeacherRoutes from "./routes/TeacherRoutes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      {/* Student routes */}
      <Route
        path="/student"
        element={
          <ProtectedRoute allowedRoles={["student"]}>
            <StudentDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/student/exam/:examId"
        element={
          <ProtectedRoute allowedRoles={["student"]}>
            <ExamPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/student/exam/:examId/instructions"
        element={<ExamInstructions />}
      />

      {/* ✅ Teacher routes */}
      <Route path="/teacher/*" element={<TeacherRoutes />} />

      {/* Admin */}
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
    </Routes>
  );
}


// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Login />} />

//       <Route
//         path="/student"
//         element={
//           <ProtectedRoute allowedRoles={["student"]}>
//             <StudentDashboard />
//           </ProtectedRoute>
//         }
//       />
//       {/* <Route path="/student/dashboard" element={<StudentDashboard />} /> */}
//       <Route
//         path="/student/exam/:examId"
//         element={
//           <ProtectedRoute allowedRoles={["student"]}>
//             <ExamPage />
//           </ProtectedRoute>
//         }
//       />
//       <Route
//         path="/student/exam/:examId/instructions"
//         element={<ExamInstructions />}
//       />
//       {/* <Route path="/student/exam/:examId/start" element={<ExamPage />} /> */}

//       <Route path="/teacher/*" element={<TeacherRoutes />} />

//       {/* <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
//       <Route path="/teacher/questions" element={<QuestionBank />} /> */}
//       <Route path="/admin/dashboard" element={<AdminDashboard />} />
//     </Routes>
//   );
// }

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
