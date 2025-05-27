import { useState } from 'react';
import { Grid, Typography, Box, Rating, Stack, FormControl, InputLabel, Select, MenuItem, } from '@mui/material';
import MobWorkerReviewCard from './mobWorkerReviewCard';


const MobWorkerReview = () => {
    const [sortOption, setSortOption] = useState('latest');

    const handleChange = (event) => {
        setSortOption(event.target.value);
        // Optional: Call a function to re-sort the reviews based on selected option
    };

    return (
        <Grid >
            <Grid sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2, mb: 2 }}>
                <Stack spacing={0.5} sx={{ pl: 1.5 }}>
                    <Stack direction="row" spacing={1} alignItems="center" >
                        <Typography sx={{ fontWeight: 'bold', fontSize: '22px' }}>4.5</Typography>
                        <Rating size="medium" name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                    </Stack>
                    <Typography sx={{ fontSize: '14px', color: 'text.secondary' }}>2 reviews</Typography>
                </Stack>

                <Box sx={{ width: 120 }}>
                    <FormControl fullWidth size="small">
                        <InputLabel id="sort-select-label">Sort</InputLabel>
                        <Select
                            labelId="sort-select-label"
                            id="sort-select"
                            value={sortOption}
                            label="Sort"
                            onChange={handleChange}
                        >
                            <MenuItem value="latest">Latest</MenuItem>
                            <MenuItem value="oldest">Oldest</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Grid>
            <MobWorkerReviewCard name="Jane" rate="4.0" date="20th dec 2025" />
            <MobWorkerReviewCard name="Elanor" rate="4.5" date="17th Mar 2025" />

        </Grid>
    );
};

export default MobWorkerReview