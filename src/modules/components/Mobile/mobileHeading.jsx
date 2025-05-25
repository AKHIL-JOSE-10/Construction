import { Typography, Box } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const MobHeading = ({ Heading }) => {
  return (
        <Box sx={{
      display: 'flex',
      width: '100%',
      position: 'fixed',
      top: 0,
      zIndex: 1000,
      height: '65px',
      bgcolor: 'white',
      borderBottom: '1px solid #ccc',
    }}>

      {/* Back Arrow */}
      <Box
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
  );
};

export default MobHeading;
