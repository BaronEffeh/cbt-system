// layouts/TeacherLayout.jsx
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";

const TeacherLayout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        overflow: "hidden", // prevent body scroll
      }}
    >
      {/* Sidebar */}
      <Box
        sx={{
          width: 240,
          flexShrink: 0,
          position: "fixed",
          top: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <Sidebar role="teacher" />
      </Box>

      {/* Main Content */}
      <Box
        component="main"
        // sx={{
        //   flexGrow: 1,
        //   ml: "240px", // push content beside sidebar
        //   overflowY: "auto",
        //   p: 3,
        //   bgcolor: "#f5f7fa",
        // }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default TeacherLayout;
