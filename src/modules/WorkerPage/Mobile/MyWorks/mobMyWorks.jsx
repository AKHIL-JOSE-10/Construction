import React from 'react'
import {
  Grid,
  Box,
  Typography,
} from "@mui/material";
import MobMyWorksTopBar from './mobMyWorksTopBar';
import MobHeading from '@/modules/components/Mobile/mobileHeading';

const MobMyWorks = () => {
  return (
    <Grid>
        <MobHeading Heading="My Works"/>
        <MobMyWorksTopBar/>
    </Grid>
  )
}

export default MobMyWorks