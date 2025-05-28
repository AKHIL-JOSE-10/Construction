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
                <MobHeading Heading="Help & support" />
            </Grid>

            <Grid >
<Grid>
  <Typography
    sx={{
      px: 1,
      py: 1,
      mb: 5,
      mx:1,
      fontSize: 14,
      color: 'text.primary',
      backgroundColor: '#E8F0FE',  // soft blue background
      borderRadius: 1,
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      fontWeight: 550,
      textAlign: 'left',
      maxWidth: 400,
      lineHeight: 1.4,
      userSelect: 'none',
    }}
  >
    Need help ? Find answers, get in touch with support, or raise tickets to resolve your issues quickly and efficiently.
  </Typography>
</Grid>

                <Box sx={{ display: 'flex', flexDirection: 'row'}}>
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
