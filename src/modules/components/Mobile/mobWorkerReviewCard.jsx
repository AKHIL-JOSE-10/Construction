import { Grid, Avatar, Box, Rating, Stack, Typography } from '@mui/material';


const MobWorkerReviewCard = ({name,rate,date}) => {
    return (
        <Grid sx={{ p: 2 , mb:2, border:'1.5px solid #f8ece9 '}}>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                <Box sx={{ display: 'flex', flexDirection: 'row' }}>

                    <Avatar
                        src="https://randomuser.me/api/portraits/women/79.jpg"
                        sx={{ width: 45, height: 45, border: '5px solid white', mr: 2 }} />

                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography sx={{ fontWeight: '650', fontSize: '17px' }}>{name}</Typography>
                        <Stack direction="row" spacing={1} alignItems="center">
                            <Typography sx={{ fontWeight: '650', fontSize: '17px' }}>{rate}</Typography>
                            <Rating size="small" name="half-rating-read" defaultValue={rate} precision={0.5} readOnly />
                        </Stack>
                    </Box>

                </Box>
                <Typography sx={{ color: 'grey', fontSize: '14px',fontWeight:'500', pr: 1 }}>{date}</Typography>
            </Box>

            <Box sx={{ maxWidth: 600, mx: 'auto' }}>
                <Typography sx={{ mt: 3, fontSize: 15, lineHeight: 1.4, textAlign: 'justify' }}>
                    The service was quick and efficient. The electrician arrived on time, diagnosed the issue in minutes,
                    and completed the repair professionally. I really appreciate the clear communication and fair pricing.
                    Would definitely recommend !
                </Typography>
            </Box>

        </Grid>
    )
}

export default MobWorkerReviewCard