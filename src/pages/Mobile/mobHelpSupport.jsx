import { Grid, Box, Typography } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import ChatIcon from '@mui/icons-material/Chat';
import AssignmentIcon from '@mui/icons-material/Assignment';
import MobHeading from '../../modules/components/Mobile/mobileHeading';
import MobHelpSupportCard from '../../modules/components/Mobile/mobHelpSupportCard';

const MobHelpSupport = () => {
    return (
        <Grid container direction="column">

            {/* Heading section – untouched */}
            <Grid>
                <MobHeading Heading="Help & Support" />
            </Grid>

            {/* Styled section below the heading */}
            <Box
                sx={{
                    position: 'relative',
                    background: 'linear-gradient(135deg,rgb(255, 253, 248) 0%,rgb(236, 228, 217) 100%)',
                    pt: 3,
                    pb: 6,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    mt: -1,
                    zIndex: 1,
                    overflow: 'hidden',
                }}
            >
                {/* Decorative blurred blob background */}
                <Box
                    sx={{
                        background: 'radial-gradient(circle,rgb(16, 15, 11),rgb(129, 85, 20))',
                        filter: 'blur(120px)',
                        top: '-60px',
                        left: '-80px',
                        opacity: 0.3,
                        zIndex: 0,
                    }}
                />

                <Box
                    sx={{
                        position: 'absolute',
                        background: 'radial-gradient(circle,rgb(193, 83, 162),rgb(11, 39, 88))',
                        filter: 'blur(100px)',
                        bottom: '-100px',
                        right: '-80px',
                        opacity: 0.3,
                        zIndex: 0,
                    }}
                />

                {/* Content below heading */}
                <Box
                    sx={{
                        px: 2,
                        py: 3,
                        mb: 4,
                        borderRadius: 1,
                        mx: 'auto',
                        background: '#fff',
                        boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                        zIndex: 1,
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: 16,
                            color: 'text.primary',
                            fontWeight: 550,
                            lineHeight: 1.7,
                            userSelect: 'none',
                        }}
                    >
                        Need help❓ Find answers, get in touch with support 💬, or raise tickets 📝 to resolve your issues quickly and efficiently.
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 2, mb: 2 }}>
                    <MobHelpSupportCard title="Chat Support" icon={<ChatIcon />} />
                    <MobHelpSupportCard title="Call Us" icon={<PhoneIcon />} />
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 2, mb: 2 }}>
                    <MobHelpSupportCard title="Raise a Ticket" icon={<ReportProblemIcon />} />
                    <MobHelpSupportCard title="FAQ" icon={<HelpOutlineIcon />} />
                </Box>

                <Box sx={{ display: 'flex',}}>
                    <MobHelpSupportCard title="My Tickets" icon={<AssignmentIcon />} />
                </Box>
            </Box>
        </Grid>
    );
};

export default MobHelpSupport;
