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
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import MobWorkerFormbottomButton from '../Components/mobWorkerFormbottomButton';
import CustomProgressBar from '../Components/mobWorkerFormTopProgressBar';

const MobWorkerForm1 = () => {
  const [gender, setGender] = React.useState('');
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/mobile-worker-form2');
  };

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        bgcolor: '#F8F1E8',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        px: 0.5,
        pb:5,
        pt:1,
        overflow: 'hidden',
        '::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '135px',
          backgroundColor: '#E0CBB2',
          transform: 'skewY(-3deg)',
          transformOrigin: 'top left',
          zIndex: 0,
        },
        '::after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '100%',
          height: '280px',
          backgroundColor: '#E0CBB2',
          transform: 'skewY(-5deg)',
          transformOrigin: 'bottom right',
          zIndex: 0,
        },
      }}
    >
      {/* Top Controls */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxWidth: 420,
        }}
      >
        <Box display="flex" alignItems="center" justifyContent="space-between" px={0.5}>
          <IconButton onClick={() => navigate(-1)}>
            <ArrowBackIosIcon sx={{ fontSize: '1.5rem' }} />
          </IconButton>
          <Typography fontSize="0.95rem" fontWeight="bold">1 / 4</Typography>
        </Box>
        <CustomProgressBar activeStep={0} />
      </Box>

      {/* Form Card */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          bgcolor: 'white',
          borderRadius: 3,
          boxShadow: 3,
          width: '100%',
          maxWidth: 420,
          px: 2,
          pt:2,
          mt: 1,
        }}
      >
        <Box sx={{ px: 1, mb: 8 }}>
          <Typography sx={{ fontSize: '1.4rem', fontWeight: "bold", mb: 3, mt: 4 }}>
            Tell us more about yourself
          </Typography>

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

          <Typography variant="body2" mb={1}>
            Full Name <Typography component="span" fontSize={12} color="text.secondary">(as mentioned in adhaar)</Typography>
          </Typography>
          <TextField
            placeholder="Enter your Full Name"
            variant="standard"
            fullWidth
            sx={{ mb: 3 }}
            InputProps={{
              disableUnderline: false,
              sx: { fontSize: '0.95rem', bgcolor:'white' },
            }}
          />

          <Typography variant="body2" mb={0.5}>Date of Birth</Typography>
          <TextField
            type="date"
            fullWidth
            variant="standard"
            sx={{ mb: 3 }}
            InputProps={{
              disableUnderline: false,
              sx: { fontSize: '0.95rem', bgcolor:'white' },
            }}
            InputLabelProps={{ shrink: true }}
          />

          <Typography variant="body2" mb={0.5}>Gender</Typography>
          <FormControl fullWidth variant="standard" sx={{ mb: 3 }}>
            <InputLabel>Select</InputLabel>
            <Select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              label="Select"
            >
              <MenuItem value={'Male'}>Male</MenuItem>
              <MenuItem value={'Female'}>Female</MenuItem>
              <MenuItem value={'Other'}>Other</MenuItem>
            </Select>
          </FormControl>

          <Typography variant="body2" mb={0.5}>Aadhaar Number</Typography>
          <TextField
            placeholder="Enter your Aadhaar number"
            variant="standard"
            fullWidth
            type="text"
            inputProps={{
              inputMode: 'numeric',
              pattern: '[0-9]{12}',
              maxLength: 12,
            }}
            
            InputProps={{
              disableUnderline: false,
              sx: { fontSize: '0.95rem' , bgcolor:'white'},
            }}
          />
        </Box>

        <MobWorkerFormbottomButton handleNext={handleNext} />
      </Box>
    </Box>
  );
};

export default MobWorkerForm1;
