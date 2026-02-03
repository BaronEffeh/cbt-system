import React from "react";
import { Box, Typography, Card, Stack } from "@mui/material";

const data = [
  { className: "Middle Class 1", students: 109 },
  { className: "Upper Class 2", students: 20 },
];

const StudentsPerClass = () => {
  return (
    <Box>
      <Typography variant="h6" mb={2}>
        Students Per Class
      </Typography>

      <Stack spacing={2}>
        {data.map((item, index) => (
          <Card
            key={index}
            sx={{
              p: 2,
              borderRadius: 2,
              border: "1px solid #E6EAF0",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography>{item.className}</Typography>
            <Typography fontWeight="bold" fontSize="18px">
              {item.students}
            </Typography>
          </Card>
        ))}
      </Stack>
    </Box>
  );
};

export default StudentsPerClass;
