import { Typography, Box } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const MobHeading = ({ Heading }) => {
  return (
    <Box sx={{ display: 'flex', width: '100%', position: 'relative', height: '60px', mt: 2 }}>
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
          maxWidth: '80%', // limits text width on small screens
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
