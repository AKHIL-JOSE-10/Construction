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
  const [customDateRange, setCustomDateRange] = useState({ from: "", to: "" });

  const [tempDateOption, setTempDateOption] = useState(dateOption);
  const [tempCustomDateRange, setTempCustomDateRange] = useState(customDateRange);

  return (
    <Grid
      sx={{
        p: 2,
        fontFamily: "'Poppins', sans-serif",
        pb: 10,
        bgcolor: "#fff",
      }}
    >
      <MobHeading Heading="Filter" />

      {/* Category */}
      <Box sx={{ mb: 2 }}>
        <Typography sx={{ fontSize: 14, fontWeight: 500 }}>
          Category of Services
        </Typography>
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
            fontSize: 14,
            cursor: "pointer",
          }}
        >
          <Typography sx={{ color: "#111", fontSize: 14 }}>
            {selectedServices.length > 0
              ? selectedServices.join(", ")
              : "Select Services"}
          </Typography>
          <ArrowForwardIosIcon sx={{ fontSize: "14px" }} />
        </Box>
      </Box>

      {/* Collapsible Service List */}
      <Collapse in={showServices}>
        <Box
          sx={{
            border: "1px solid #ddd",
            borderRadius: 2,
            mt: 1,
            mb: 2,
            maxHeight: 250,
            overflowY: "auto",
            px: 1,
          }}
        >
          {serviceCategories.map((service, idx) => {
            const isSelected = selectedServices.includes(service);
            return (
              <Box
                key={idx}
                onClick={() =>
                  setSelectedServices((prev) =>
                    isSelected
                      ? prev.filter((s) => s !== service)
                      : [...prev, service]
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
        <Typography sx={{ fontSize: 14, fontWeight: 500 }}>
          Price Range (Rs)
        </Typography>
        <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
          <Box sx={{ flex: 1 }}>
            <Typography sx={{ fontSize: 12, mb: 0.5 }}>Min Price</Typography>
            <input
              type="number"
              value={priceRange[0]}
              onChange={(e) => {
                const value = e.target.value;
                setPriceRange([value, priceRange[1]]);
              }}
              style={{
                width: "90%",
                padding: "8px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                fontSize: "14px",
              }}
            />
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography sx={{ fontSize: 12, mb: 0.5 }}>Max Price</Typography>
            <input
              type="number"
              value={priceRange[1]}
              onChange={(e) => {
                const value = e.target.value;
                setPriceRange([priceRange[0], value]);
              }}
              style={{
                width: "90%",
                padding: "8px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                fontSize: "14px",
              }}
            />
          </Box>
        </Box>
      </Box>

      {/* Location */}
      <Box sx={{ mb: 2, mt: 4 }}>
        <Typography sx={{ fontSize: 14, fontWeight: 500 }}>
          Where would you like to Appoint your Service?
        </Typography>
        <Box
          sx={{
            mt: 1,
            px: 1.5,
            py: 1.3,
            border: "1px solid #ccc",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            cursor: "pointer",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <RoomIcon sx={{ color: "gray", fontSize: 20 }} />
            <Typography
              sx={{
                fontSize: 15,
                color: "#aaa",
                fontStyle: "italic",
              }}
            >
              Thrissur, Kerala
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Available on Date Selector */}
      <Box sx={{ mb: 2, mt: 4 }}>
        <Typography sx={{ fontSize: 14, fontWeight: 500 }}>
          Select Worker Available Date
        </Typography>
        <Box
          onClick={() => {
            setTempDateOption(dateOption);
            setTempCustomDateRange(customDateRange);
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
            {dateOption === "all"
              ? "All Dates"
              : dateOption === "today"
              ? "Today"
              : dateOption === "tomorrow"
              ? "Tomorrow"
              : customDateRange.from && customDateRange.to
              ? `From: ${customDateRange.from} To: ${customDateRange.to}`
              : "Choose Date"}
          </Typography>
          <ArrowForwardIosIcon sx={{ fontSize: "14px", color: "#999" }} />
        </Box>
      </Box>

      {/* Date Dialog */}
      <Dialog open={openDateDialog} onClose={() => setOpenDateDialog(false)} fullWidth>
        <DialogTitle>Select Date Option</DialogTitle>
        <DialogContent>
          {["all", "today", "tomorrow", "custom"].map((opt) => (
            <Box
              key={opt}
              onClick={() => setTempDateOption(opt)}
              sx={{
                p: 1,
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography>
                {opt === "all"
                  ? "All Dates"
                  : opt === "today"
                  ? "Today"
                  : opt === "tomorrow"
                  ? "Tomorrow"
                  : "Choose from Calendar"}
              </Typography>
              {tempDateOption === opt && (
                <CheckCircleIcon sx={{ color: "#B08B6F", fontSize: 18 }} />
              )}
            </Box>
          ))}

          {tempDateOption === "custom" && (
            <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
              <Box sx={{ flex: 1 }}>
                <Typography sx={{ fontSize: 12, mb: 0.5 }}>From</Typography>
                <input
                  type="date"
                  value={tempCustomDateRange.from}
                  onChange={(e) =>
                    setTempCustomDateRange({
                      ...tempCustomDateRange,
                      from: e.target.value,
                    })
                  }
                  style={{
                    width: "85%",
                    padding: "8px",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                    fontSize: "14px",
                  }}
                />
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography sx={{ fontSize: 12, mb: 0.5 }}>To</Typography>
                <input
                  type="date"
                  value={tempCustomDateRange.to}
                  onChange={(e) =>
                    setTempCustomDateRange({
                      ...tempCustomDateRange,
                      to: e.target.value,
                    })
                  }
                  style={{
                    width: "85%",
                    padding: "8px",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                    fontSize: "14px",
                  }}
                />
              </Box>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDateDialog(false)}>Cancel</Button>
          <Button
            variant="contained"
            sx={{ bgcolor: "#B08B6F" }}
            onClick={() => {
              setDateOption(tempDateOption);
              setCustomDateRange(tempCustomDateRange);
              setOpenDateDialog(false);
            }}
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>

      {/* Apply Filter Button */}
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          bgcolor: "#fff",
          px: 2,
          py: 1.5,
          zIndex: 1300,
        }}
      >
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
            "&:hover": {
              bgcolor: "#9e775c",
            },
          }}
        >
          Apply Filter
        </Button>
      </Box>
    </Grid>
  );
};

export default MobSearchWorkerFilter;
