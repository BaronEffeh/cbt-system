import { useNavigate } from "react-router-dom";
import { loginUser } from "../../auth/auth";
import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  IconButton,
  InputAdornment,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Login = () => {
    const navigate = useNavigate();
    const [loginId, setLoginId] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = () => {
        const user = loginUser(loginId, password);

        if (!user) {
            setError("Invalid login details");
            return;
        }

        if (user.role === "student") navigate("/student");
        if (user.role === "teacher") navigate("/teacher/dashboard");
        if (user.role === "admin") navigate("/admin/dashboard");
    };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: "url('/login-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          bgcolor: "rgba(0,0,0,0.4)",
        }}
      />

      <Card
        sx={{
          width: 420,
          zIndex: 1,
          border: "7px dashed #A9A9A7",
          borderRadius: 2,
        }}
      >
        <CardContent sx={{ p: 4 }}>
          <Box textAlign="center" mb={3}>
            <img
              src="/school-logo.png"
              alt="School Logo"
              width={60}
              style={{ marginBottom: 8 }}
            />
            <Typography variant="h6" fontWeight="bold">
              Britarch Schools Abuja
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Exams Portal
            </Typography>
          </Box>

          {error && (
            <Typography color="error" textAlign="center" mt={1}>
                {error}
            </Typography>
          )}

          <TextField
            fullWidth
            label="Login ID"
            margin="normal"
            value={loginId}
            onChange={(e) => setLoginId(e.target.value)}
          />

          <TextField
            fullWidth
            label="Password"
            type={showPassword ? "text" : "password"}
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword((p) => !p)}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Button
            fullWidth
            variant="contained"
            onClick={handleLogin}
            sx={{
              mt: 3,
              bgcolor: "#FFD600",
              color: "#000",
              fontWeight: "bold",
              "&:hover": {
                bgcolor: "#f5c400",
              },
            }}
          >
            Login
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Login;
