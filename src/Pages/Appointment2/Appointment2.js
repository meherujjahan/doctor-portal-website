import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../images/doctor.png';
import Bg from '../../images/appointment-bg.png';
import { Button, Typography } from '@mui/material';


const Appoitnment2 = () => {

    const appointmentBg = {
        background :   `url(${Bg})`,
         backgroundColor:'rgba(45, 58, 74, 0.9',
         backgroundBlendMode:'darken, luminosity',
        marginTop : 200,
    }
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
      <Grid  container spacing={2}>
        <Grid item xs={12} md={6}>
        <img
        style={{width:400, marginTop: "-120px"}}
        src={doctor} alt="" />
        </Grid>
        <Grid item xs={12} md={6} sx={{
            display:'flex', 
            justifyContent:'flex-start',
            textAlign:'start'
        }}>
          <Box>
          <Typography style={{color:'#5CE7ED'}} sx={{mb:5}} variant='h6'>
            Appointment
          </Typography>
          <Typography variant='h4'style={{color:'white'}} sx={{mb:5}} >
           Make An Appointment Today
          </Typography>
          <Typography sx={{mb:5}} variant='h6'style={{color:'white',fontSize:14, fontWidth:300 }}>
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti eum perspiciatis, dolorum adipisci reiciendis ipsum consequuntur debitis accusantium id labore!
          </Typography>
          <Button style={{backgroundColor:'#5CE7ED'}} sx={{mb:5, backgroundColor:''}} variant='contained'>Learn More</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
    );
};

export default Appoitnment2;