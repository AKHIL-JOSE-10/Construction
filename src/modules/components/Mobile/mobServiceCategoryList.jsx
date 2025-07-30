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
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                backgroundColor: '#fff',
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
                <IconButton size="large">
                    <ArrowForwardIosIcon sx={{ fontSize: 26, color: '#888' }} />
                </IconButton>
            </Box>
            <Box sx={{ textAlign: 'center',justifyContent:'center', px: 1, py: 1 }}>
                <Typography
                    variant="subtitle2"
                    sx={{
                        fontWeight: 600,
                        fontSize: '14px',
                        backgroundColor: '#f5f5f5',
                        wordBreak: 'break-word',
                    }}
                >
                    {title}
                </Typography>
            </Box>
        </Box>
    );
};

export default MobServiceCategoryList;
