import { Grid } from '@mui/material';
import MobWorkerAbout from '@/modules/components/Mobile/mobWorker/mobWorkerAbout';
import MobWorkerReview from '@/modules/components/Mobile/mobWorker/mobWorkerReview';
import MobWorkerMyWorks from '@/modules/components/Mobile/mobWorker/mobWorkerMyWorks'; // Import this

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
