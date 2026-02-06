import { Routes, Route } from "react-router-dom";
import TeacherLayout from "../layouts/TeacherLayout";
import TeacherDashboard from "../dashboards/teacher/TeacherDashboard";
import QuestionBank from "../pages/teacher/QuestionBank";
import ProtectedRoute from "../auth/ProtectedRoute";

const TeacherRoutes = () => {
  return (
    <Routes>
      <Route
        element={
          <ProtectedRoute allowedRoles={["teacher"]}>
            <TeacherLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<TeacherDashboard />} />
        <Route path="question-bank" element={<QuestionBank />} />
      </Route>
    </Routes>
  );
};

export default TeacherRoutes;





// // routes/TeacherRoutes.jsx (or wherever you define routes)
// import { Routes, Route } from "react-router-dom";
// import TeacherLayout from "../layouts/TeacherLayout";
// import TeacherDashboard from "../dashboards/teacher/TeacherDashboard";
// import QuestionBank from "../pages/teacher/QuestionBank";
// import ProtectedRoute from "../auth/ProtectedRoute";
// // import Exams from "../pages/Teacher/Exams";
// // import Results from "../pages/Teacher/Results";

// const TeacherRoutes = () => {
//   return (
//     <Routes>
//       {/* Teacher routes */}
//       <Route
//         path="/teacher"
//         element={
//           <ProtectedRoute allowedRoles={["teacher"]}>
//             <TeacherLayout />
//             <Route index element={<TeacherDashboard />} />
//             <Route path="question-bank" element={<QuestionBank />} />
//           </ProtectedRoute>
//         }
//       ></Route>

//       {/* <Route path="/teacher" element={<TeacherLayout />}> */}
//         {/* <Route index element={<TeacherDashboard />} /> */}
//         {/* <Route path="question-bank" element={<QuestionBank />} /> */}
//         {/* <Route path="exams" element={<Exams />} /> */}
//         {/* <Route path="results" element={<Results />} /> */}
//       {/* </Route> */}
//     </Routes>
//   );
// };

// export default TeacherRoutes;
