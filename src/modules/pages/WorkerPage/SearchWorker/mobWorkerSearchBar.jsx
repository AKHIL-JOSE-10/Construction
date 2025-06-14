import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Input,
  Avatar,
  IconButton,
  Button,
} from "@mui/material";
import {
  LocationOnOutlined,
  Search,
  Tune,
  AccessTime,
  CheckCircle as CheckCircleIcon,
  BookmarkBorder,
  ArrowForward as ArrowForwardIcon,
  NotificationsNoneOutlined,
  KeyboardArrowDownOutlined,
  Bookmark,
   Close
} from "@mui/icons-material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link, useNavigate } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import VerifiedIcon from "@mui/icons-material/Verified";


const MobWorkerSearchBar = () => {

  const navigate = useNavigate();
  const inputRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const filteredWorkers = workers.filter((worker) =>
    worker.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


//recent showing functionalities

  const [showRecent, setShowRecent] = useState(false);
  const [recentSearches, setRecentSearches] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("recentSearches")) || [];
    setRecentSearches(stored);
  }, []);

  const saveToLocalStorage = (term) => {
    let updated = [...recentSearches];
    const existsIndex = updated.findIndex(item => item.term === term);

    if (existsIndex !== -1) {
      updated.splice(existsIndex, 1); // remove duplicate
    }

    updated.push({ term, type: term.includes(" ") ? "worker" : "service" });

    if (updated.length > 2) updated.shift(); // max 2

    setRecentSearches(updated);
    localStorage.setItem("recentSearches", JSON.stringify(updated));
  };

  const handleSearch = () => {
    if (!searchTerm.trim()) return;
    saveToLocalStorage(searchTerm.trim());
    setSearchTerm("");
    setShowRecent(false);
  };

  const handleClear = (term) => {
    const updated = recentSearches.filter((s) => s.term !== term);
    setRecentSearches(updated);
    localStorage.setItem("recentSearches", JSON.stringify(updated));
  };


  return (
         <Box sx={{ px: 1.5, pt: 1.5 }}>
          {/* Search Bar */}
          <Box
            sx={{
              bgcolor: "#fff",
              borderRadius: "12px",
              px: 1.1,
              py: 0.5,
              display: "flex",
              alignItems: "center",
              boxShadow: 1,
            }}
          >
            <Search sx={{ color: "gray", mr: 1 }} />
            <Input
              inputRef={inputRef}
              fullWidth
              disableUnderline
              placeholder="Search Services & Workers"
              value={searchTerm}
              onFocus={() => setShowRecent(true)}
              onBlur={() => setTimeout(() => setShowRecent(false), 200)} // Delay hiding
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              sx={{
                fontSize: 13,
                "&::placeholder": {
                  fontSize: 12,
                  color: "gray",
                  opacity: 1,
                },
              }}
            />
            <IconButton onClick={handleSearch}>
              <Tune />
            </IconButton>
          </Box>
    
          {/* Recent Searches */}
          {showRecent && (
            <Box sx={{ mt: 1, bgcolor: "#fff", borderRadius: 2, p: 1, boxShadow: 1 }}>
              <Typography fontWeight="bold" fontSize={13} mb={1}>
                Recent searches
              </Typography>
              {recentSearches.map((item, idx) => (
                <Grid
                  key={idx}
                  container
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{ mb: 1 }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <AccessTime sx={{ fontSize: 18, mr: 1, color: "gray" }} />
                    <Typography fontSize={14} fontWeight={500}>
                      {item.term}
                    </Typography>
                  </Box>
                  <IconButton size="small" onClick={() => handleClear(item.term)}>
                    <Close sx={{ fontSize: 18 }} />
                  </IconButton>
                </Grid>
              ))}
            </Box>
          )}
        </Box>
  )
}

export default MobWorkerSearchBar