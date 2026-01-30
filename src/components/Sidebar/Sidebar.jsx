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
        height: "100vh",
        bgcolor: "#083b66",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
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
                  color: "#fff",
                  "&.active": {
                    bgcolor: "#0b4f8a",
                  },
                }}
              >
                <ListItemIcon sx={{ color: "#fff" }}>
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
