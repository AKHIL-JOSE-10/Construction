import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
} from "@mui/material";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";

const DateSelector = ({ open, onClose, onConfirm }) => {
  const [selectedOption, setSelectedOption] = useState("all");
  const [selectedDates, setSelectedDates] = useState([]);

  const handleCalendarSelect = (date) => {
    const formatted = dayjs(date).format("YYYY-MM-DD");
    setSelectedDates((prev) =>
      prev.includes(formatted)
        ? prev.filter((d) => d !== formatted)
        : [...prev, formatted]
    );
  };

  const handleOk = () => {
    onConfirm(selectedOption, selectedDates);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth PaperProps={{ sx: { borderRadius: 2 } }}>
      <DialogTitle sx={{ bgcolor: "#f7f2ee", color: "#333", fontWeight: 600 }}>
        Choose the date when the worker is available
      </DialogTitle>
      <DialogContent sx={{ bgcolor: "#fff" }}>
        <RadioGroup value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
          <FormControlLabel
            value="all"
            control={<Radio sx={{ color: "#B08B6F", "&.Mui-checked": { color: "#B08B6F" } }} />}
            label="All Dates"
          />
          <FormControlLabel
            value="today"
            control={<Radio sx={{ color: "#B08B6F", "&.Mui-checked": { color: "#B08B6F" } }} />}
            label="Today"
          />
          <FormControlLabel
            value="tomorrow"
            control={<Radio sx={{ color: "#B08B6F", "&.Mui-checked": { color: "#B08B6F" } }} />}
            label="Tomorrow"
          />
          <FormControlLabel
            value="custom"
            control={<Radio sx={{ color: "#B08B6F", "&.Mui-checked": { color: "#B08B6F" } }} />}
            label="Choose from Calendar"
          />
        </RadioGroup>

        {selectedOption === "custom" && (
          <Box mt={2}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar
                onChange={handleCalendarSelect}
                disablePast
                slots={{
                  day: (props) => {
                    const formatted = dayjs(props.day).format("YYYY-MM-DD");
                    const isSelected = selectedDates.includes(formatted);
                    return (
                      <Box
                        onClick={() => handleCalendarSelect(props.day)}
                        sx={{
                          width: 36,
                          height: 36,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          bgcolor: isSelected ? "#B08B6F" : "transparent",
                          borderRadius: "50%",
                          color: isSelected ? "#fff" : "#000",
                          cursor: "pointer",
                          fontSize: 14,
                          fontWeight: 500,
                        }}
                      >
                        {dayjs(props.day).date()}
                      </Box>
                    );
                  },
                }}
              />
            </LocalizationProvider>
          </Box>
        )}
      </DialogContent>
      <DialogActions sx={{ bgcolor: "#fff", px: 2, py: 1.5 }}>
        <Button onClick={onClose} sx={{ textTransform: "none", color: "#555" }}>
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={handleOk}
          sx={{
            bgcolor: "#B08B6F",
            textTransform: "none",
            "&:hover": { bgcolor: "#9c725d" },
          }}
        >
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DateSelector;
