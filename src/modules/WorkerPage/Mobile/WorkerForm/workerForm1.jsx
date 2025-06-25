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
    navigate('/mobile-worker-form2');
  };

  return (
<Box sx={{ bgcolor: '#f1e4d4', pt: 4 }}>
  {/* Top Progress Bar */}
  <TopProgressBar activeStep={0} />

      {/* Main Form Box with Rounded Top */}
      <Box
        sx={{
          mt:4,
          bgcolor: 'white',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          px: 2,
          py: 3.5,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        {/* Form Content */}
        <Box sx={{ mb: 8 }}>
          {/* Title */}
          <Typography sx={{ fontSize: '1.4rem', fontWeight: 'bold', mb: 3 }}>
            Tell us more about yourself
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

          {/* Full Name */}
          <Typography variant="body2" mb={0.5}>
            Full Name{' '}
            <Typography component="span" fontSize={12} color="text.secondary">
              (as mentioned in Aadhaar)
            </Typography>
          </Typography>
          <TextField
            placeholder="Enter your Full Name"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
            inputProps={{
              style: {
                bgcolor: 'white',
                height: 40,
                padding: '0 10px',
                fontSize: '0.9rem',
              },
            }}
          />

          {/* Date of Birth */}
          <Typography variant="body2" mb={0.5}>
            Date of Birth
          </Typography>
          <TextField
            type="date"
            fullWidth
            sx={{ mb: 2 }}
            InputLabelProps={{ shrink: true }}
            inputProps={{
              style: {
                bgcolor: 'white',
                height: 40,
                padding: '0 10px',
                fontSize: '0.9rem',
              },
            }}
          />

          {/* Gender */}
          <Typography variant="body2" mb={0.5}>
            Gender
          </Typography>
          <FormControl fullWidth variant="outlined" sx={{ mb: 2 }}>
            <InputLabel>Select</InputLabel>
            <Select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              label="Select"
              sx={{
                bgcolor: 'white',
                height: 50,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <MenuItem value={'Male'}>Male</MenuItem>
              <MenuItem value={'Female'}>Female</MenuItem>
              <MenuItem value={'Other'}>Other</MenuItem>
            </Select>
          </FormControl>

          {/* Aadhaar Number */}
          <Typography variant="body2" mb={0.5}>
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
                bgcolor: 'white',
                height: 40,
                padding: '0 10px',
                fontSize: '0.9rem',
              },
            }}
            sx={{ mb: 2 }}
          />
        </Box>

        {/* Bottom Buttons */}
        <BottomButton handleNext={handleNext} />
      </Box>
    </Box>
  );
};

export default WorkerForm1;
