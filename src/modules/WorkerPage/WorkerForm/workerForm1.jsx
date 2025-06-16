import React from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Avatar,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Stepper,
  Step,
  StepLabel
} from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const WorkerForm1 = () => {

  const [gender, setGender] = React.useState('');
  const steps = ['', '', '', '']; // Stepper placeholder
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/mobile-worker-form2');
  };

  return (
    <Box sx={{ px: 2 }}>

      <Box display="flex" alignItems="center" justifyContent="space-between" mb={2} pt={1.5}>
        <IconButton onClick={() => navigate(-1)}>
          <ArrowBackIosIcon sx={{ fontSize: '1.5rem' }} />
        </IconButton>
        <Typography fontSize="0.95rem" fontWeight="bold">
          <Typography> 1 / 4</Typography>
        </Typography>
      </Box>
      <Box
        sx={{

          bgcolor: 'white',
          px: 0,
          pb: 3.5,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >


        {/* Top Progress Bar */}
        <Stepper activeStep={0} alternativeLabel >
          {steps.map((_, index) => (
            <Step key={index}>
              <StepLabel></StepLabel>
            </Step>
          ))}
        </Stepper>

        <Box>
          {/* Title */}
          <Typography sx={{ fontSize: '1.7rem', fontWeight: "bold", mb: 3, mt: 4 }}>
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
            Full Name <Typography component="span" fontSize={12} color="text.secondary">(as mentioned in adhaar)</Typography>
          </Typography>
          <TextField
            placeholder="Enter your Full Name"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
            slotProps={{
              input: {
                sx: {
                  bgcolor: 'white',
                  height: 40,
                  px: 1.2,
                  fontSize: '0.9rem'
                }
              }
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
            slotProps={{
              input: {
                sx: {
                  bgcolor: 'white',
                  height: 40,
                  px: 1.2,
                  fontSize: '0.9rem',
                  color: '#000',
                }
              },
              textField: {
                InputLabelProps: { shrink: true },
              }
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
                alignItems: 'center'
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
            }}
            sx={{ mb: 2 }}
            slotProps={{
              input: {
                sx: {
                  bgcolor: 'white',
                  height: 40,
                  px: 1.2,
                  fontSize: '0.9rem'
                }
              }
            }}
          />
        </Box>

        {/* Bottom Next Button */}
        <Box display="flex" justifyContent="center">
          <Button
            variant="contained"
            onClick={handleNext}
            sx={{
              bgcolor: '#a47763',
              borderRadius: 5,
              width: '100%',
              py: 1.2,
              textTransform: 'none',
              fontWeight: 'bold',
              mt: 3,
              mb: 1
            }}
          >
            Next
          </Button>
        </Box>
      </Box>
    </Box>

  );
};

export default WorkerForm1;
