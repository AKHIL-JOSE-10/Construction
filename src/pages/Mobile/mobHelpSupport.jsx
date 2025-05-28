import { Grid, Box, Typography } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import ChatIcon from '@mui/icons-material/Chat';
import AssignmentIcon from '@mui/icons-material/Assignment';
import MobHeading from '../../modules/components/Mobile/mobileHeading';
import MobHelpSupportCard from '../../modules/components/Mobile/mobHelpSupportCard';
import HelpSupport_img from '../../assets/HelpSupport_img.jpg'

const MobHelpSupport = () => {
    return (
        <Grid container direction="column">
            <Grid >
                <Grid>
                    <MobHeading Heading="Help & Support" />
                </Grid>

                <Box sx={{ zIndex: 2 }}>
                    <Grid>
                        <Typography
                            sx={{
                                pl: 2,
                                pr: 1,
                                pb: 1,
                                mb: 2,
                                fontSize: 15,
                                color: 'text.primary',
                                fontWeight: 500,
                                textAlign: 'left',
                                lineHeight: 1.6,
                                userSelect: 'none',
                            }}
                        >
                            Need help❓Find answers, get in touch with support 💬, or raise tickets 📝 to resolve your issues quickly and efficiently.
                        </Typography>
                    </Grid>

                    <Grid container spacing={8} justifyContent="center" sx={{ mb: 5 }}>
                        <Grid item>
                            <MobHelpSupportCard title="Chat Support" icon={<ChatIcon />} />
                        </Grid>
                        <Grid item>
                            <MobHelpSupportCard title="Call Us" icon={<PhoneIcon />} />
                        </Grid>
                    </Grid>

                    <Grid container spacing={8} justifyContent="center" sx={{ mb: 5 }}>
                        <Grid item>
                            <MobHelpSupportCard title="Raise a Ticket" icon={<ReportProblemIcon />} />
                        </Grid>
                        <Grid item>
                            <MobHelpSupportCard title="FAQ" icon={<HelpOutlineIcon />} />
                        </Grid>
                    </Grid>

                    <Grid  sx={{ml:6, mb: 5 }} >
                        <MobHelpSupportCard title="My Tickets" icon={<AssignmentIcon />} />
                    </Grid>

                </Box>

                {/* Background image pinned to the bottom-right of the screen */}
                <Box
                    component="img"
                    src={HelpSupport_img}
                    alt="Background Decorative"
                    sx={{
                        position: 'absolute',
                        bottom: 0,
                        right: 0,
                        width: '88%',
                        opacity: 0.5,
                        pointerEvents: 'none',
                        userSelect: 'none',
                        zIndex: -1,
                    }}
                />
            </Grid>
        </Grid>

    );
};

export default MobHelpSupport;
