import React, { useState } from "react";
import {
  Grid,
  Box,
  Typography,
  Button,
  Switch,
  Collapse,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import MobHeading from "@/modules/ClientPages/MobileView/MobTopBarHeading/mobTopBarHeading";
import RoomIcon from "@mui/icons-material/Room";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const serviceCategories = [
  "Architectural Design",
  "Civil Engineering",
  "Interior Design",
  "Landscaping",
  "Structural Engineering",
  "MEP Services",
  "Pool Design",
  "Steel Fabrication",
  "Construction Contracting",
  "Masonry Work",
  "Carpentry Services",
  "Metal Fabrication",
  "Electrical Services",
  "Plumbing Services",
  "Painting Services",
  "Waterproofing Solutions",
  "Flooring Installation",
  "Security & Surveillance",
  "Smart Home Automation",
  "Audio & Video Systems",
  "Automated Smart Locks",
  "Aluminium Fabrication",
  "Stainless Steel Fabrication",
  "Roofing Solutions",
  "Mild Steel Fabrication",
  "Glass Fabrication",
];

const MobSearchWorkerFilter = () => {
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);
  const [priceRange, setPriceRange] = useState(["", ""]);
  const [selectedServices, setSelectedServices] = useState([]);
  const [showServices, setShowServices] = useState(false);
  const [openDateDialog, setOpenDateDialog] = useState(false);
  const [dateOption, setDateOption] = useState("all");
  const [selectedDates, setSelectedDates] = useState([]);
  const [tempDateOption, setTempDateOption] = useState(dateOption);
  const [tempSelectedDates, setTempSelectedDates] = useState(selectedDates);

  const handleCalendarDateClick = (date) => {
    const dateStr = date.format("YYYY-MM-DD");
    setTempSelectedDates((prev) =>
      prev.includes(dateStr) ? prev.filter((d) => d !== dateStr) : [...prev, dateStr]
    );
  };

  return (
    <Grid sx={{ p: 2, fontFamily: "'Poppins', sans-serif", pb: 10, bgcolor: "#fff" }}>
      <MobHeading Heading="Filter" />

      {/* Category */}
      <Box sx={{ mb: 2 }}>
        <Typography sx={{ fontSize: 14, fontWeight: 500 }}>Category of Services</Typography>
        <Box
          onClick={() => setShowServices((prev) => !prev)}
          sx={{
            mt: 1,
            p: 1.3,
            border: "1px solid #ccc",
            borderRadius: "12px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <Typography sx={{ fontSize: 14, color: "#111" }}>
            {selectedServices.length > 0 ? selectedServices.join(", ") : "Select Services"}
          </Typography>
          <ArrowForwardIosIcon sx={{ fontSize: "14px" }} />
        </Box>
      </Box>

      <Collapse in={showServices}>
        <Box sx={{ border: "1px solid #ddd", borderRadius: 2, mt: 1, mb: 2, maxHeight: 250, overflowY: "auto", px: 1 }}>
          {serviceCategories.map((service, idx) => {
            const isSelected = selectedServices.includes(service);
            return (
              <Box
                key={idx}
                onClick={() =>
                  setSelectedServices((prev) =>
                    isSelected ? prev.filter((s) => s !== service) : [...prev, service]
                  )
                }
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  py: 1,
                  px: 1,
                  cursor: "pointer",
                  bgcolor: isSelected ? "#f7f2ee" : "#fff",
                  borderBottom: "1px solid #eee",
                }}
              >
                <Typography sx={{ fontSize: 14 }}>{service}</Typography>
                {isSelected ? (
                  <CheckCircleIcon sx={{ color: "#B08B6F", fontSize: 18 }} />
                ) : (
                  <RadioButtonUncheckedIcon sx={{ fontSize: 18, color: "#ccc" }} />
                )}
              </Box>
            );
          })}
        </Box>
      </Collapse>

      {/* Price Range */}
      <Box sx={{ mb: 3, width: "100%", mt: 2 }}>
        <Typography sx={{ fontSize: 14, fontWeight: 500 }}>Price Range (Rs)</Typography>
        <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
          <input
            type="number"
            placeholder="Min"
            value={priceRange[0]}
            onChange={(e) => setPriceRange([e.target.value, priceRange[1]])}
            style={{ flex: 1, padding: "8px", borderRadius: "8px", border: "1px solid #ccc", fontSize: "14px" }}
          />
          <input
            type="number"
            placeholder="Max"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], e.target.value])}
            style={{ flex: 1, padding: "8px", borderRadius: "8px", border: "1px solid #ccc", fontSize: "14px" }}
          />
        </Box>
      </Box>

      {/* Location */}
      <Box sx={{ mb: 2, mt: 4 }}>
        <Typography sx={{ fontSize: 14, fontWeight: 500 }}>Where would you like to Appoint your Service?</Typography>
        <Box sx={{ mt: 1, px: 1.5, py: 1.3, border: "1px solid #ccc", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <RoomIcon sx={{ color: "gray", fontSize: 20 }} />
            <Typography sx={{ fontSize: 15, color: "#aaa", fontStyle: "italic" }}>Thrissur, Kerala</Typography>
          </Box>
        </Box>
      </Box>

      {/* Available Dates */}
      <Box sx={{ mb: 2, mt: 4 }}>
        <Typography sx={{ fontSize: 14, fontWeight: 500 }}>Select Worker Available Dates</Typography>
        <Box
          onClick={() => {
            setTempDateOption(dateOption);
            setTempSelectedDates(selectedDates);
            setOpenDateDialog(true);
          }}
          sx={{
            mt: 1,
            p: 1.3,
            border: "1px solid #ccc",
            borderRadius: "12px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <Typography sx={{ fontSize: 14, color: "#444" }}>
            {selectedDates.length > 0 ? `Selected: ${selectedDates.join(", ")}` : "Choose Dates"}
          </Typography>
          <ArrowForwardIosIcon sx={{ fontSize: "14px", color: "#999" }} />
        </Box>
      </Box>

      {/* Date Dialog */}
      <Dialog open={openDateDialog} onClose={() => setOpenDateDialog(false)} fullWidth>
        <DialogTitle>Select Dates</DialogTitle>
        <DialogContent>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar onChange={handleCalendarDateClick} disablePast />
          </LocalizationProvider>

          <Box sx={{ mt: 2 }}>
            <Typography variant="body2" fontWeight="bold">Selected Dates:</Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}>
              {tempSelectedDates.map((date, idx) => (
                <Box key={idx} sx={{ px: 1.5, py: 0.5, bgcolor: "#eee", borderRadius: "8px", fontSize: 13 }}>
                  {date}
                </Box>
              ))}
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDateDialog(false)}>Cancel</Button>
          <Button
            variant="contained"
            sx={{ bgcolor: "#B08B6F" }}
            onClick={() => {
              setSelectedDates(tempSelectedDates);
              setOpenDateDialog(false);
            }}
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>

      {/* Apply Filter */}
      <Box sx={{ position: "fixed", bottom: 0, left: 0, right: 0, bgcolor: "#fff", px: 2, py: 1.5, zIndex: 1300 }}>
        <Button
          variant="contained"
          fullWidth
          sx={{
            bgcolor: "#B08B6F",
            borderRadius: "12px",
            textTransform: "none",
            fontSize: "16px",
            fontWeight: "bold",
            py: 1.4,
            "&:hover": { bgcolor: "#9e775c" },
          }}
        >
          Apply Filter
        </Button>
      </Box>
    </Grid>
  );
};

export default MobSearchWorkerFilter;