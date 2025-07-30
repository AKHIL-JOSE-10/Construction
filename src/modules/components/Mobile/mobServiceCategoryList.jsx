import { Box, Typography, IconButton, Avatar } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const MobServiceCategoryList = ({ img, title, onClick }) => {
    return (
        <Box
            onClick={onClick}
            sx={{
                width: '100%',
                maxWidth: 150,
                height:160,
                borderRadius: 1,
                overflow: 'hidden',
                border:'0.3px solid #818690ff',
                boxShadow: '0 2px 8px rgba(13, 22, 74, 0.3)',
                backgroundColor: '#f1f3f6ff',
                cursor: 'pointer',
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                    transform: 'scale(1.03)',
                },
                m: 1,
            }}
        >
            <Box
                sx={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: '#f5f5f5',
                    px: 1.5,
                    py: 2,
                }}
            >
                <Avatar
                    src={img}
                    alt={title}
                    sx={{
                        width: 68,
                        height: 68,
                        borderRadius: 2,
                    }}
                />
                <IconButton >
                    <ArrowForwardIosIcon sx={{ fontSize: 26, color: '#888' , ml:2 }} />
                </IconButton>
            </Box>
<Box sx={{ p:0.7 }}>
  <Box
    sx={{
      backgroundColor: '#f5f5f5',
      height: 40, // fixed height
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '4px',
      px: 1,
      py:0.5,
      textAlign: 'center',
    }}
  >
    <Typography
      variant="subtitle2"
      sx={{
        fontWeight: 600,
        fontSize: '14px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
      }}
    >
      {title}
    </Typography>
  </Box>
</Box>
        </Box>
    );
};

export default MobServiceCategoryList;
