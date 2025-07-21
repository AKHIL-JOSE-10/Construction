import React, { useState } from "react";
import {
    Box,
    Button,
    Grid,
    Stack,
    TextField,
    Typography,
    Avatar,
    MenuItem,
    InputAdornment,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { MapPinIcon, WrenchIcon } from "@phosphor-icons/react";
import MobHeading from "@/modules/components/Mobile/mobileHeading";
const MobUrgentServiceRequest = () => {
    const [service, setService] = useState("plumbing");

const [date, setDate] = useState(new Date());
    const services = [
        { value: "plumbing", label: "Plumbing" },
        { value: "electrician", label: "Electrician" },
        { value: "painting", label: "Painting" },
    ];

    return (
        <Box sx={{ p: 2, bgcolor: "#f8f9fa", }}>

<MobHeading Heading='Fast booking'/>

            <Box
                sx={{
                    px: 1,
                    py:4,
                    borderRadius: 2,
                    bgcolor: "#fff",
                    boxShadow: "0px 1px 4px rgba(0,0,0,0.1)",
                    mb: 5,
                }}
            >
                {/* Location */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        p: 1,
                        bgcolor: "#ffffffff",
                        borderRadius: 1,
                        boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
                        mb: 3,
                        border:'1px solid rgba(0,0,0,0.1)'
                    }}
                >
                    <MapPinIcon size={22} />
                    <Box>
                        <Typography fontWeight={600} fontSize={15}>
                            Thrissur
                        </Typography>
                        <Typography fontSize={12} color="text.secondary" lineHeight={2.2}>
                            Indira Gandhi International Airport
                        </Typography>
                    </Box>
                </Box>

                {/* Service select */}
     <Box sx={{display:'flex', flexDirection:'row' , gap:2, mb:1}}>
        <TextField
  fullWidth
  select
  size="medium"
  label="Service"
  value={service}
  onChange={(e) => setService(e.target.value)}
  sx={{
    mb: 2,
    '& .MuiOutlinedInput-root': {
      backgroundColor: '#fff',
    },
  }}
  slotProps={{
    input: {
      startAdornment: (
        <InputAdornment position="start">
          <WrenchIcon size={18} />
        </InputAdornment>
      ),
    },
  }}
>
  {services.map((option) => (
    <MenuItem key={option.value} value={option.value}>
      {option.label}
    </MenuItem>
  ))}
</TextField>

<LocalizationProvider dateAdapter={AdapterDateFns}>
  <DatePicker
    label="Select Date"
    value={date}
    onChange={(newValue) => setDate(newValue)}
    slotProps={{
      textField: {
        fullWidth: true,
        size: 'medium',
        sx: {
          mb: 2,
          '& .MuiOutlinedInput-root': {
            backgroundColor: '#fff',
          },
        },
      },
    }}
  />
</LocalizationProvider>
        </Box>           
<Box sx={{display:'flex', flexDirection:'row' , gap:2 , mb:3}}>
<TextField
  id="outlined-helperText"
  label="preferences (optional)"
  placeholder="+ Add your preferences"
  size="medium" 
  sx={{
    backgroundColor: '#fff', 
    borderRadius: 1, 
    width:'48%'        
  }}
  slotProps={{
    inputLabel: {
      sx: { fontSize: '0.7rem', color:'grey' }, 
    },
    input: {
      sx: { fontSize: '0.85rem' }, 
    },
  }}
/>
<TextField
  id="outlined-helperText"
  label="Time (optional)"
  placeholder="+ Add preferred time"
  size="medium" 
  sx={{
    backgroundColor: '#fff', 
    borderRadius: 1,  
    width:'48%'   
  }}
  slotProps={{
    inputLabel: {
      sx: { fontSize: '0.7rem', color:'grey' }, // smaller label
    },
    input: {
      sx: { fontSize: '0.85rem' }, 
    },
  }}
/>

</Box>

<Box sx={{mb:3}}>
<TextField
  id="outlined-helperText"
  label="Work Description (optional)"
  placeholder="There is a leaking pipe under the kitchen"
  size="medium" 
  fullWidth
  sx={{
    backgroundColor: '#fff', // ⬅️ white background
    borderRadius: 1,  
  }}
  slotProps={{
    inputLabel: {
      sx: { fontSize: '0.8rem', color:'grey' }, // smaller label
    },
    input: {
      sx: { fontSize: '0.85rem' }, // smaller input text
    },
  }}
/>
</Box>
<Box sx={{mb:3}}>
<TextField
  id="outlined-helperText"
  label="Add photos optional (optional)"
  placeholder="+ Select image file"
  size="medium" 
  fullWidth
  sx={{
    backgroundColor: '#fff', // ⬅️ white background
    borderRadius: 1,  
  }}
  slotProps={{
    inputLabel: {
      sx: { fontSize: '0.8rem', color:'grey' }, // smaller label
    },
    input: {
      sx: { fontSize: '0.85rem' }, // smaller input text
    },
  }}
/>
</Box>


                <Button
                    variant="contained"
                    fullWidth
                    sx={{
                        bgcolor: "#D1004D",
                        textTransform: "none",
                        "&:hover": { bgcolor: "#b80042" },
                    }}
                >
                    Book Now
                </Button>
            </Box>

            {/* Ongoing Request */}
            <Box
                sx={{
                    p: 1.5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderRadius: 0.5,
                    mb: 4,
                    bgcolor: "#fff",
                    boxShadow: "0px 1px 4px rgba(0,0,0,0.1)",
                }}
            >
                <Box display="flex" alignItems="center" gap={1}>
                    <Avatar
                        src="https://randomuser.me/api/portraits/women/45.jpg"
                        sx={{ width: 32, height: 32 }}
                    />
                    <Box>
                        <Typography fontSize={14} fontWeight={600}>
                            Esther Howard
                        </Typography>
                        <Typography fontSize={12} color="grey">
                            Plumbing
                        </Typography>
                    </Box>
                </Box>
                <Typography fontSize={12} fontWeight={600} color="primary">
                    Ongoing
                </Typography>
            </Box>

            {/* Hot Offer */}
            <Typography fontWeight={600} mb={1}>
                Hot offer
            </Typography>
            <Grid container spacing={1}>
                <Grid >
                    <Box
                        sx={{
                            p: 1.5,
                            bgcolor: "#fff",
                            borderRadius: 2,
                            boxShadow: "0px 1px 4px rgba(0,0,0,0.1)",
                        }}
                    >
                        <Stack direction="row" spacing={1} alignItems="center">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/196/196561.png"
                                alt="Mastercard"
                                style={{ width: 84, height: 84 }}
                            />
                            <Box>
                                <Typography fontSize={17} fontWeight={600}>
                                    15% discount with mastercard
                                </Typography>
                                <Typography fontSize={15} color="grey">
                                    Lorem ipsum dolor sit amet et adip
                                </Typography>
                            </Box>
                        </Stack>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default MobUrgentServiceRequest;
