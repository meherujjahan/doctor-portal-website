import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';


const Service = (props) => {
   const {name, des, img} = props.service;
    return (
        <Grid item xs={2} sm={4} md={4} >
               <Card sx={{ minWidth: 275, border: 0,boxShadow: 0 }}>
               <CardMedia
               style={{width:"auto", hight:'80px', margin:'0 auto'}}
        component="img"
        height="140"
        image={img}
        alt="green iguana"
      />
        <CardContent>
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {des}
          </Typography>
        </CardContent>
      </Card>
            </Grid>
    );
};

export default Service;