import React from 'react';
import Appoitnment2 from '../Appointment2/Appointment2';

import Banner from '../Banner/Banner';
import Navigation from '../Navigation/Navigation';
import Services from '../Services/Services';

const Home = () => {
    return (
       <div>
        <Navigation></Navigation>
        <Banner></Banner>
       <Services></Services>
      <Appoitnment2></Appoitnment2>
       </div>
    );
};

export default Home;