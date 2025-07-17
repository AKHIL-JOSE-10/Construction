import { useState } from "react";
import MobMyBookingcard from "./mobMyBookingscard";
import {
    Grid,
    Box,
    Button,
    Typography,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Rating,
    IconButton,
    TextField
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const MobMyBookingsCompleted = () => {
    const [open, setOpen] = useState(false);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setRating(0);
        setComment("");
    };

    const handleRate = () => {
        console.log("Rated:", rating);
        console.log("Comment:", comment);
        handleClose();
    };

    const getRatingLabel = (value) => {
        switch (value) {
            case 5: return "Excellent 😍";
            case 4: return "Very Good 😊";
            case 3: return "Good 🙂";
            case 2: return "Fair 😐";
            case 1: return "Poor 😟";
            default: return "No rating selected";
        }
    };

    const renderBookingCard = () => (
        <MobMyBookingcard Heading="completed">
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <Button
                    variant="outlined"
                    onClick={handleClickOpen}
                    sx={{
                        borderRadius: '50px',
                        textTransform: 'none',
                        px: 2,
                        borderColor: '#333333',
                        color: '#333333',
                        mr: 3,
                        '&:hover': { borderColor: 'black', backgroundColor: '#f0f0f0' },
                    }}
                >
                    <Typography sx={{ fontSize: 12, fontWeight: 'bold' }}>Rate Service</Typography>
                </Button>
                <Button
                    variant="outlined"
                    sx={{
                        borderRadius: '50px',
                        textTransform: 'none',
                        px: 2,
                        borderColor: '#333333',
                        color: '#333333',
                        '&:hover': { borderColor: 'black', backgroundColor: '#f0f0f0' },
                    }}
                >
                    <Typography sx={{ fontSize: 12, fontWeight: 'bold' }}>Click to Pay</Typography>
                </Button>
            </Box>
        </MobMyBookingcard>
    );

    return (
        <Grid>
            {renderBookingCard()}
            {renderBookingCard()}
            {renderBookingCard()}

            <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
                <Box sx={{ p: 3, position: 'relative' }}>
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            right: 12,
                            top: 12,
                            color: '#aaa',
                        }}
                    >
                        <CloseIcon />
                    </IconButton>

                    <DialogTitle
                        sx={{
                            textAlign: 'center',
                            fontWeight: 'bold',
                            fontSize: '1.5rem',
                            pb: 1,
                        }}
                    >
                        Rate the Service
                    </DialogTitle>

                    <DialogContent sx={{ textAlign: 'center' }}>
                        <Typography sx={{ color: '#555', mb: 2 }}>
                            How was your experience? We value your feedback! 😇
                        </Typography>
                        <Rating
                            name="service-rating"
                            value={rating}
                            onChange={(event, newValue) => setRating(newValue)}
                            size="large"
                            sx={{ fontSize: '2.5rem' }}
                        />
                        <Typography sx={{ mt: 1, fontStyle: 'italic', color: '#888' }}>
                            {getRatingLabel(rating)}
                        </Typography>

                        <TextField
                            fullWidth
                            multiline
                            rows={3}
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            placeholder="Write your feedback here..."
                            variant="outlined"
                            sx={{
                                mt: 2,
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '10px',
                                },
                            }}
                        />
                    </DialogContent>

                    <DialogActions sx={{ justifyContent: 'center', mt: 2 }}>
                        <Button
                            onClick={handleRate}
                            variant="contained"
                            disabled={rating === 0}
                            sx={{
                                textTransform: 'none',
                                borderRadius: '50px',
                                px: 5,
                                backgroundColor: '#BFA088',
                                color: 'white',
                                fontWeight: 'bold',
                                '&:hover': {
                                    backgroundColor: '#a27c66',
                                },
                            }}
                        >
                            Submit
                        </Button>
                    </DialogActions>
                </Box>
            </Dialog>
        </Grid>
    );
};

export default MobMyBookingsCompleted;
