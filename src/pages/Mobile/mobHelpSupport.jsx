import { Grid, Box } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import ChatIcon from '@mui/icons-material/Chat';
import AssignmentIcon from '@mui/icons-material/Assignment';
import MobHeading from '../../modules/components/Mobile/mobileHeading';
import MobHelpSupportCard from '../../modules/components/Mobile/mobHelpSupportCard';

const MobHelpSupport = () => {
    return (
        <Grid container direction="column" spacing={2}>

            <Grid >
                <MobHeading Heading="Help & support" />
            </Grid>

            <Grid >

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
