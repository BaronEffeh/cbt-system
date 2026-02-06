// components/QuestionBank/QuestionBankTable.jsx
import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Chip,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const statusStyle = (status) => ({
  bgcolor: status === "Published" ? "#FFE066" : "#D1D1CF",
  color: "#000",
});

const QuestionBankTable = ({ rows }) => {
  return (
    <Table>
      <TableHead sx={{ bgcolor: "#C9C9C9" }}>
        <TableRow>
          <TableCell>Subject</TableCell>
          <TableCell>Class</TableCell>
          <TableCell>Questions</TableCell>
          <TableCell>Last Edited</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {rows.map((row, index) => (
          <TableRow key={index}>
            <TableCell>{row.subject}</TableCell>
            <TableCell>{row.class}</TableCell>
            <TableCell>{row.questions}</TableCell>
            <TableCell>{row.edited}</TableCell>
            <TableCell>
              <Chip
                label={row.status}
                size="small"
                sx={statusStyle(row.status)}
              />
            </TableCell>
            <TableCell>
              <IconButton size="small">
                <EditIcon fontSize="small" />
              </IconButton>
              <IconButton size="small">
                <DeleteIcon fontSize="small" />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default QuestionBankTable;
