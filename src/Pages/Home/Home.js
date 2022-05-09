import React from 'react';
import Bannar from './Bannar';
import Care from './Care';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services/Services';
import Testimonials from './Testimonials';
const Home = () => {
    return (
        <div className='px-12'>
            <Bannar/>
            <Info/>
            <Services/>
            <Care/>
            <MakeAppointment/>
            <Testimonials/>
        </div>
    );
};

export default Home;