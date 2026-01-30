import { Box, Typography } from "@mui/material";

const Header = ({ name, subtitle }) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        Hello, {name}
      </Typography>
      <Typography variant="body2" sx={{ color: "text.secondary" }}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
