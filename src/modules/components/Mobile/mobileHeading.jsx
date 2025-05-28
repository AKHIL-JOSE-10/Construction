import { Typography, Box, Grid } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const MobHeading = ({ Heading }) => {
  const navigate = useNavigate(); // Initialize navigate

  return (
    <Grid sx={{ mb: 8 }}>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          position: 'fixed',
          top: 0,
          zIndex: 1000,
          height: '60px',
          bgcolor: 'white',
        }}
      >
        {/* Back Arrow */}
        <Box
          onClick={() => navigate(-1)} // Go back one page
          sx={{
            position: 'absolute',
            left: 10,
            top: '50%',
            transform: 'translateY(-50%)',
            cursor: 'pointer',
          }}
        >
          <ArrowBackIosIcon sx={{ fontSize: '20px' }} />
        </Box>

        {/* Centered Heading */}
        <Typography
          noWrap
          sx={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '21px',
            fontWeight: 500,
            maxWidth: '80%',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            textAlign: 'center',
          }}
        >
          {Heading}
        </Typography>
      </Box>
    </Grid>
  );
};

export default MobHeading;
