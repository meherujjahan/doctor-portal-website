import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import bg from '../../images/bg.png';
import chair from '../../images/chair.png';
import { Button, Typography, Container } from '@mui/material';



const bannerBg = {
   background: `url(${bg})`,
  
};
const verticalCenter = {
    display:'flex',
    alignItems:'center',
    height:450,
};
const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} style={{...verticalCenter, textAlgin:'left'}}>
          <Box>
          <Typography variant='h4'>
              Your New Smile <br/>
              starts here
          </Typography>
          <Typography variant='h6'
           sx={{fontSize:'14',fontWeight:300, color:'gray'}}>
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque numquam atque, corrupti similique non velit hic omnis error voluptas cumque!
          </Typography>
          <Button style={{backgroundColor:'#5CE7ED'}} sx={{mb:5, backgroundColor:''}} variant='contained'>Get Appointment</Button>
          </Box>
        </Grid>
        <Grid style={verticalCenter} item xs={6}>
         <img style={{width:'350px'}} src={chair} alt="" />
        </Grid>
      </Grid>
    </Container>
    );
};

export default Banner;