import { Box, Typography, IconButton, Avatar } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const MobServiceCategoryList = ({ img, title, onClick }) => {
    return (
        <Box
            onClick={onClick}
            sx={{
                width: '100%',
                maxWidth: 150,
                height:150,
                borderRadius: 1,
                overflow: 'hidden',
                border:'0.5px solid #ffffffff',
                boxShadow: '0 2px 8px rgba(51, 62, 120, 0.3)',
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
                    backgroundColor: '#f5f5f5ff',
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
                    <ArrowForwardIosIcon sx={{ fontSize: 25, color:"#7d83c3ff" , ml:2 }} />
                </IconButton>
            </Box>
<Box>
  <Box
    sx={{
      backgroundColor: '#edeef4ff',
      height: 42, // fixed height
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
