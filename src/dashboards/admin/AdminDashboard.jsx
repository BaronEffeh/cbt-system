import React from "react";
import { Box } from "@mui/material";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";

const AdminDashboard = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar role="admin" />
      <Box sx={{ flex: 1, p: 3 }}>
        {/* Admin content */}
        {/* Header */}
        <Header 
          name="Exam Officer"
          subtitle="This portal allows you to create, edit, and manage exam questions for your 
          subject(s). Please ensure all questions are accurate and complete before saving."
        />
      </Box>
    </Box>
  );
};

export default AdminDashboard;
