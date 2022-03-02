import { Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({booking, date}) => {
    const {name, time , space, price}=booking;
    const [openBooking, setOpenBooking] = React.useState(false);
    const handleBookingOpen = () => setOpenBooking(true);
    const handleBookingClose = () => setOpenBooking(false);
    return (
        <>
        <Grid item xs={12} md={4} sm={6}>
             <Paper elevation={3} sx={{py:5}}>
             <Typography  sx={{ color: 'info.main', fontWidth:600 }} variant="h5" gutterBottom component="div">
                 {name}
            </Typography>
             <Typography variant="h6" gutterBottom component="div">
                 {time}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
                {space} SPACE AVAILABLE
            </Typography>
            <Button onClick={handleBookingOpen} variant="contained">Book Appointment</Button>
            </Paper>
  </Grid>
  <BookingModal
  date={date}
  booking={booking}
  handleBookingClose= {handleBookingClose}
  openBooking={openBooking}
  ></BookingModal>
        </>
    );
};

export default Booking;