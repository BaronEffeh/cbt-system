import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SchoolIcon from "@mui/icons-material/School";
import PeopleIcon from "@mui/icons-material/People";
import LogoutIcon from "@mui/icons-material/Logout";

export const sidebarConfig = {
  student: [
    { label: "Dashboard", icon: <DashboardIcon />, path: "/student" },
    { label: "Logout", icon: <LogoutIcon />, path: "/logout", isBottom: true },
  ],

  teacher: [
    { label: "Dashboard", icon: <DashboardIcon />, path: "/teacher" },
    { label: "Question Bank", icon: <AssignmentIcon />, path: "/teacher/question-bank" },
    { label: "Logout", icon: <LogoutIcon />, path: "/logout", isBottom: true },
  ],

  admin: [
    { label: "Dashboard", icon: <DashboardIcon />, path: "/admin/dashboard" },
    { label: "Subjects", icon: <SchoolIcon />, path: "/admin/subjects" },
    { label: "Users", icon: <PeopleIcon />, path: "/admin/users" },
    { label: "Logout", icon: <LogoutIcon />, path: "/logout", isBottom: true },
  ],
};
