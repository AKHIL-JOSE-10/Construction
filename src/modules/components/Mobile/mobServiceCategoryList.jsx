import { Box, Typography } from '@mui/material';

const MobServiceCategoryList = ({ img, title, onClick }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        width: 105,
        height: 105,
        borderRadius: 2,
        overflow: 'hidden',
        cursor: 'pointer',
        position: 'relative',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.25)',
        m: 0.5,
      }}
    >
      {/* Full-size Image */}
      <Box
        component="img"
        src={img}
        alt={title}
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />

      {/* Full Gradient Overlay with Title */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom, rgba(62, 61, 61, 0.03), rgba(50, 50, 50, 0.42), rgba(0, 0, 0, 0.71), rgba(0, 0, 0, 1))',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          pb: 1.2,
        }}
      >
        <Typography
          variant="caption"
          sx={{
            color: '#fff',
            fontSize: '10px',
            textAlign: 'center',
            lineHeight: 1.2,
            wordWrap: 'break-word',
            mb:1
          }}
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
};

export default MobServiceCategoryList;
