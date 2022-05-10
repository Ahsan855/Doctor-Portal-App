import React from 'react';
import Bannar from './Bannar';
import Care from './Care';
import ContactUs from './ContactUs';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services/Services';
import Testimonials from './Testimonials';
const Home = () => {
    return (
        <div>
            <Bannar/>
            <Info/>
            <Services/>
            <Care/>
            <MakeAppointment/>
            <Testimonials/>
            <ContactUs/>
        </div>
    );
};

export default Home;