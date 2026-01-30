import { Card, CardContent, Typography, Button, Box } from "@mui/material";

const statusStyles = {
  available: {
    border: "2px solid #12AF20",
    buttonText: "Take Exam",
    buttonColor: "#FFD700",
  },
  ongoing: {
    border: "2px solid #003366",
    buttonText: "Continue Exam",
    buttonColor: "#FFD700",
  },
  completed: {
    border: "2px solid #FFD700",
    buttonText: "View Exam Score",
    buttonColor: "#FFD700",
  },
  locked: {
    border: "2px solid #9e9e9e",
    buttonText: "Take Exam",
    buttonColor: "#e0e0e0",
  },
};

const ExamCard = ({
  subject,
  questions,
  duration,
  status = "available",
  onClick,
}) => {
  const { border, buttonText, buttonColor } =
    statusStyles[status] || statusStyles.available;

  const isDisabled = status === "locked";

  return (
    <Card
      sx={{
        width: 277,
        height: 120,
        border,
        borderRadius: 2,
        p: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        opacity: isDisabled ? 0.6 : 1,
        cursor: isDisabled ? "not-allowed" : "pointer",
      }}
    >
      <CardContent sx={{ p: 0 }}>
        <Typography fontWeight="bold">{subject}</Typography>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            mt: 0.5,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            {questions} Questions
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {duration}
          </Typography>
        </Box>
      </CardContent>

      <Button
        fullWidth
        size="small"
        variant="contained"
        disabled={isDisabled}
        onClick={onClick}
        sx={{
          height: 32,
          borderRadius: 2,
          bgcolor: buttonColor,
          color: "#000",
          fontWeight: "bold",
          "&:hover": {
            bgcolor: isDisabled ? buttonColor : "#D6B500",
          },
        }}
      >
        {buttonText}
      </Button>
    </Card>
  );
};

export default ExamCard;
