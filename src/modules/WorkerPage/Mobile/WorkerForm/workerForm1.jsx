import React from 'react';
import {
  Box,
  Typography,
  TextField,
  Avatar,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import BottomButton from './bottomButton';
import TopProgressBar from './topProgressBar';

const WorkerForm1 = () => {
  const [gender, setGender] = React.useState('');
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/mobile-worker-form4');
  };

  return (
    <Box sx={{ p: 2 }}>

      {/* Form Content */}

      <Box sx={{ mb:4}}>

        {/* Title */}
        <Typography sx={{ fontSize: '1.5rem', fontWeight: 'bold', mb: 3, textAlign: 'center',mt:1 }}>
          Create Your Worker Profile
        </Typography>

        {/* Avatar upload */}
        <Box display="flex" justifyContent="center" mb={3}>
          <IconButton color="primary" component="label">
            <Avatar
              sx={{
                width: 80,
                height: 80,
                bgcolor: '#f0f0f0',
                color: 'gray',
              }}
            >
              <PhotoCamera />
            </Avatar>
            <input hidden accept="image/*" type="file" />
          </IconButton>
        </Box>

        <Typography
          sx={{
            fontSize: '1.1rem',
            fontWeight: 'bold',
            mb: 4,
            pb: 1,
            borderBottom: '1px solid #ccc',
            width: '100%',
          }}
        >
          General Details
        </Typography>

        {/* Full Name */}
        <Typography sx={{
          fontSize: { xs: "15px", sm: "26px", md: "26px" },
          color: "#666666",
          fontWeight: "550",
          mb: 1,
          ml: 0.5,
        }}>
          Full Name{' '}
          <Typography component="span" fontSize={12} color="text.secondary">
            (as mentioned in Aadhaar)
          </Typography>
        </Typography>

        <TextField
          placeholder="Enter your Full Name"
          variant="outlined"
          fullWidth
          type="text"
          inputProps={{
            inputMode: 'numeric',
            pattern: '[0-9]{12}',
            maxLength: 12,
            style: {
              height: '40px',
              padding: '0 10px',
              fontSize: '0.9rem',
              backgroundColor: 'white',
            },
          }}
          sx={{
            mb: 2,
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#ccc',
              },
              '&:hover fieldset': {
                borderColor: '#999',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#666',
              },
            },
          }}
        />

        {/* Date of Birth */}
        <Typography
          sx={{
            fontSize: { xs: "15px", sm: "26px", md: "26px" },
            color: "#666666",
            fontWeight: "550",
            mb: 1,
            ml: 0.5,
          }}
        >
          Date of Birth
        </Typography>
        <TextField
          type="date"
          fullWidth
          variant="outlined"
          slotProps={{
            input: {
              style: {
                height: '40px',
                fontSize: '0.9rem',
                backgroundColor: 'white',
              },
            },
            inputLabel: {
              shrink: true,
            },
          }}
          sx={{
            mb: 2,
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#ccc',
              },
              '&:hover fieldset': {
                borderColor: '#999',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#666',
              },
            },
          }}
        />


        {/* Gender */}
        <Typography sx={{
          fontSize: { xs: "15px", sm: "26px", md: "26px" },
          color: "#666666",
          fontWeight: "550",
          mb: 1,
          ml: 0.5,
        }}>
          Gender
        </Typography>
        <FormControl fullWidth variant="outlined" sx={{ mb: 2 }}>
          <Select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            displayEmpty
            inputProps={{
              style: {
                padding: '10px',
                fontSize: '0.9rem',
              },
            }}
            sx={{
              backgroundColor: 'white',
              height: 40,
              '& .MuiSelect-select': {
                display: 'flex',
                alignItems: 'center',
                height: '40px !important', // Force height
                padding: '0 10px !important',
              },
              '& fieldset': {
                borderColor: '#ccc',
              },
              '&:hover fieldset': {
                borderColor: '#999',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#666',
              },
            }}
          >
            <MenuItem disabled value="">
              Select Gender
            </MenuItem>
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </Select>
        </FormControl>

        {/* Aadhaar Number */}
        <Typography sx={{
          fontSize: { xs: "15px", sm: "26px", md: "26px" },
          color: "#666666",
          fontWeight: "550",
          mb: 1,
          ml: 0.5,
        }}>
          Aadhaar Number
        </Typography>
        <TextField
          placeholder="Enter your Aadhaar number"
          variant="outlined"
          fullWidth
          type="text"
          inputProps={{
            inputMode: 'numeric',
            pattern: '[0-9]{12}',
            maxLength: 12,
            style: {
              height: '40px',
              padding: '0 10px',
              fontSize: '0.9rem',
              backgroundColor: 'white',
            },
          }}
          sx={{
            mb: 2,
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#ccc',
              },
              '&:hover fieldset': {
                borderColor: '#999',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#666',
              },
            },
          }}
        />

        {/* Contact Details Heading */}
        <Typography
          sx={{
            fontSize: '1.1rem',
            fontWeight: 'bold',
            mt:3,
            mb: 4,
            pb: 1,
            borderBottom: '1px solid #ccc',
            width: '100%',
          }}
        >
          Contact Details
        </Typography>


        {/* Email Address */}
        <Typography
          sx={{
            fontSize: { xs: "15px", sm: "20px", md: "20px" },
            color: "#666666",
            fontWeight: "550",
            mb: 1,
            ml: 0.5,
          }}
        >
          Email Address
        </Typography>
        <TextField
          placeholder="Enter your Email"
          variant="outlined"
          fullWidth
          type="email"
          slotProps={{
            input: {
              style: {
                height: '40px',
                padding: '0 10px',
                fontSize: '0.9rem',
                backgroundColor: 'white',
              },
            },
          }}
          sx={{
            mb: 2,
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: '#ccc' },
              '&:hover fieldset': { borderColor: '#999' },
              '&.Mui-focused fieldset': { borderColor: '#666' },
            },
          }}
        />

        {/* Phone Number */}
        <Typography
          sx={{
            fontSize: { xs: "15px", sm: "20px", md: "20px" },
            color: "#666666",
            fontWeight: "550",
            mb: 1,
            ml: 0.5,
          }}
        >
          Phone Number
        </Typography>
        <TextField
          placeholder="Enter your Phone Number"
          variant="outlined"
          fullWidth
          type="tel"
          inputProps={{
            inputMode: 'numeric',
            maxLength: 10,
            style: {
              height: '40px',
              padding: '0 10px',
              fontSize: '0.9rem',
              backgroundColor: 'white',
            },
          }}
          sx={{
            mb: 2,
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: '#ccc' },
              '&:hover fieldset': { borderColor: '#999' },
              '&.Mui-focused fieldset': { borderColor: '#666' },
            },
          }}
        />

        {/* Alternate Phone Number */}
        <Typography
          sx={{
            fontSize: { xs: "15px", sm: "20px", md: "20px" },
            color: "#666666",
            fontWeight: "550",
            mb: 1,
            ml: 0.5,
          }}
        >
          Alternate Phone Number
        </Typography>
        <TextField
          placeholder="Enter Alternate Phone Number"
          variant="outlined"
          fullWidth
          type="tel"
          inputProps={{
            inputMode: 'numeric',
            maxLength: 10,
            style: {
              height: '40px',
              padding: '0 10px',
              fontSize: '0.9rem',
              backgroundColor: 'white',
            },
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: '#ccc' },
              '&:hover fieldset': { borderColor: '#999' },
              '&.Mui-focused fieldset': { borderColor: '#666' },
            },
          }}
        />


      </Box>

      {/* Bottom Buttons */}
      <BottomButton handleNext={handleNext} />

    </Box>
  );
};

export default WorkerForm1;
