import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Service from '../Service/Service';
import img1 from '../../images/fluoride.png';
import img2 from '../../images/whitening.png';
import img3 from '../../images/cavity.png';

const Services = () => {
    const services = [
        {
            id:1, name:'Fluoride treatment', des:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias iste provident id nemo! Debitis, cupiditate dolorum, ex culpa quibusdam at reprehenderit neque vero dolore numquam doloremque est reiciendis ipsum mollitia!",
            img:img1
        },
        {
            id:2, name:'Whitening treatment', des:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias iste provident id nemo! Debitis, cupiditate dolorum, ex culpa quibusdam at reprehenderit neque vero dolore numquam doloremque est reiciendis ipsum mollitia!",
            img:img2
        },
        {
            id:3, name:'Cavity treatment', des:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias iste provident id nemo! Debitis, cupiditate dolorum, ex culpa quibusdam at reprehenderit neque vero dolore numquam doloremque est reiciendis ipsum mollitia!",
            img:img3
        }
    ]
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Typography sx={{ fontWeight: 500, m:2, color: 'success.main' }} variant="h6" component="div">
         OUR SERVICES
          </Typography>
            <Typography sx={{m:5, fontWeight: 600 }} variant="h3" component="div">
        Services We Provide
          </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {
            services.map(service=><Service
            key={service.id}
            service={service}>
            </Service>)
        }
        </Grid>
      </Box>
    );
};

export default Services;