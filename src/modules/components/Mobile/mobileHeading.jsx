import { Typography, Box } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const MobHeading = ({ Heading }) => {
  return (
    <Box sx={{ display: 'flex', width: '100%', position: 'relative' }}>
      <Box sx={{ mt: 3, position: 'absolute', left: 0, ml: 1.5, cursor: 'pointer' }}>
        <ArrowBackIosIcon sx={{ fontSize: '20px' }} />
      </Box>
      <Typography sx={{ mt: 2.3, ml: 15, fontSize: "23px" }}>
        {Heading}
      </Typography>
    </Box>
  );
};

export default MobHeading;