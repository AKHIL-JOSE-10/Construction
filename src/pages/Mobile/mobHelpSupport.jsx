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

            <Grid >
                <MobHeading Heading="Help & Support" />
            </Grid>

            <Grid >
                <Grid>
                    <Typography
                        sx={{
                            pl: 2,
                            pr:1,
                            pb:2,
                            mb: 4,
                            mt:1,
                            fontSize: 16,
                            color: 'text.primary',
                            fontWeight: 550,
                            textAlign: 'left',
                            maxWidth: 400,
                            lineHeight: 1.7,
                            userSelect: 'none',
                        }}
                    >
  Need help❓Find answers, get in touch with support 💬, or raise tickets 📝 to resolve your issues quickly and efficiently.                 </Typography>
                </Grid>

                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Grid>
                        <MobHelpSupportCard title="Chat Support" icon={<ChatIcon />} />
                    </Grid>
                    <Grid>
                        <MobHelpSupportCard title="Call Us" icon={<PhoneIcon />} />
                    </Grid>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Grid >
                        <MobHelpSupportCard title="Raise a Ticket" icon={<ReportProblemIcon />} />
                    </Grid>
                    <Grid >
                        <MobHelpSupportCard title="FAQ" icon={<HelpOutlineIcon />} />
                    </Grid>
                </Box>

                <Grid>
                    <MobHelpSupportCard title="My Tickets" icon={<AssignmentIcon />} />
                </Grid>

            </Grid>

        </Grid>
    );
};

export default MobHelpSupport;
