import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { sidebarConfig } from "./sidebarConfig";

const Sidebar = ({ role }) => {
  const menuItems = sidebarConfig[role];

  return (
    <Box
      sx={{
        width: 240,
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        height: "100vh",
        bgcolor: "#083b66",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        overflow: "hidden",
      }}
    >
      {/* Logo */}
      <Box sx={{ p: 2, textAlign: "center", fontWeight: "bold" }}>
        CBT Portal
      </Box>

      {/* Menu */}
      <List>
        {menuItems
          .filter((item) => !item.isBottom)
          .map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                component={NavLink}
                to={item.path}
                sx={{
                  color: "#FDFDFC",
                  "&.active": {
                    bgcolor: "#0b4f8a",
                    borderLeft: "2px solid #FDFDFC"
                  },
                }}
              >
                <ListItemIcon sx={{ color: "#FDFDFC" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
      </List>

      {/* Bottom items (Logout) */}
      <List>
        {menuItems
          .filter((item) => item.isBottom)
          .map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                component={NavLink}
                to={item.path}
                sx={{ color: "#fff" }}
              >
                <ListItemIcon sx={{ color: "#fff" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
      </List>
    </Box>
  );
};

export default Sidebar;
