import React from 'react';
import {
    Avatar,
    Box,
    Typography,
    Card,
    CardContent,
    IconButton,
    Stack,
    Button
} from '@mui/material';
import {
    LocationOn,
    MoreVert,
    CalendarToday,
    Work,
} from '@mui/icons-material';

const WorkerRequestConfirmationCard = ({ title, location, time, client, avatar }) => (

    <Card
        sx={{
            borderRadius: 1,
            mb: 2,
            boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
        }}
    >
        <CardContent>
            <Stack direction="row" justifyContent="space-between">
                <Stack direction="row" spacing={1} alignItems="center">
                    <Work fontSize="small" color="action" />
                    <Typography fontWeight="bold">{title}</Typography>
                </Stack>
                <IconButton size="small">
                    <MoreVert fontSize="small" />
                </IconButton>
            </Stack>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Box sx={{ alignSelf: 'center' }}>
                    <Stack direction="row" spacing={1} alignItems="center" my={1.5}>
                        <LocationOn fontSize="small" color="disabled" />
                        <Typography variant="body2" color="#b87d51">{location}</Typography>
                    </Stack>

                    <Stack direction="row" spacing={1} alignItems="center" mt={0.5}>
                        <CalendarToday fontSize="small" color="disabled" />
                        <Typography variant="body2" color="#b87d51">{time}</Typography>
                    </Stack>
                </Box>
            </Box>

            <Box sx={{display:'flex', flexDirection:'row', alignItems:'center'}} >
                <Button variant='outlined' sx={{height:"30px" ,border:'1px solid black' , borderRadius:2, mt:2, px:4, mr:9}}> Confirm</Button>
                <Box sx={{ alignSelf: 'center', }}>
                    <Typography variant="caption" color="#b87d51" ml={0.5}>Client</Typography>
                    <Stack direction="row" alignItems="center" spacing={1} mt={0.5}>
                        <Avatar src={avatar} sx={{ width: 24, height: 24 }} />
                        <Typography variant="body2" fontWeight={550}>{client}</Typography>
                    </Stack>
                </Box>
            </Box>

        </CardContent>
    </Card>
);

export default WorkerRequestConfirmationCard;