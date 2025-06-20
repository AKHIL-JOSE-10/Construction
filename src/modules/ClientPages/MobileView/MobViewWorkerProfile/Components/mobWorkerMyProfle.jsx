import { Grid } from '@mui/material';
import MobWorkerAbout from './mobWorkerAbout';
import MobWorkerReview from './mobWorkerReview';
import MobWorkerMyWorks from './mobWorkerMyWorks';

const MobWorkerMyProfle = () => {
  return (
    <Grid container direction="column" sx={{ px: 1, pt: 2 }}>
      <MobWorkerAbout />
      <MobWorkerMyWorks /> {/* Add My Works section here */}
      <MobWorkerReview />
    </Grid>
  );
};

export default MobWorkerMyProfle;
