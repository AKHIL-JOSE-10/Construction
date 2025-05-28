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

  <Grid>
    <MobHeading Heading="Help & Support" />
  </Grid>

  {/* Wrap this whole section in a Box with position: relative */}
  <Box sx={{ position: 'relative', maxWidth: 450, mx: 'auto' }}>
    <Grid>
      <Typography
        sx={{
          pl: 2,
          pr: 1,
          pb: 2,
          mb: 4,
          mt: 1,
          fontSize: 16,
          color: 'text.primary',
          fontWeight: 550,
          textAlign: 'left',
          maxWidth: 400,
          lineHeight: 1.7,
          userSelect: 'none',
          position: 'relative',
          zIndex: 2,
        }}
      >
        Need help❓Find answers, get in touch with support 💬, or raise tickets 📝 to resolve your issues quickly and efficiently.
      </Typography>
    </Grid>

    <Box sx={{ display: 'flex', flexDirection: 'row', position: 'relative', zIndex: 2 }}>
      <Grid>
        <MobHelpSupportCard title="Chat Support" icon={<ChatIcon />} />
      </Grid>
      <Grid>
        <MobHelpSupportCard title="Call Us" icon={<PhoneIcon />} />
      </Grid>
    </Box>

    <Box sx={{ display: 'flex', flexDirection: 'row', position: 'relative', zIndex: 2 }}>
      <Grid>
        <MobHelpSupportCard title="Raise a Ticket" icon={<ReportProblemIcon />} />
      </Grid>
      <Grid>
        <MobHelpSupportCard title="FAQ" icon={<HelpOutlineIcon />} />
      </Grid>
    </Box>

    <Grid sx={{ position: 'relative', zIndex: 2 }}>
      <MobHelpSupportCard title="My Tickets" icon={<AssignmentIcon />} />
    </Grid>

    {/* Background image absolutely positioned bottom-left */}
    <Box
      component="img"
      src={HelpSupport_img}
      alt="Background Decorative"
      sx={{
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: '70%',
        opacity: 0.5,
        pointerEvents: 'none',
        userSelect: 'none',
        zIndex: 1,
        mb:1
      }}
    />
  </Box>
</Grid>
    );
};

export default MobHelpSupport;
