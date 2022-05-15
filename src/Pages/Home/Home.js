import React from 'react';
import Bannar from './Bannar';
import Care from './Care';
import ContactUs from './ContactUs';
import Hero from './Hero';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services/Services';
import Testimonials from './Testimonials';
const Home = () => {
    return (
        <div>
            <Bannar/>
            <Info/>
            <div class="divider mt-10"></div> 
            <Hero/>
            <Services/>
            <Care/>
            <MakeAppointment/>
            <Testimonials/>
            <ContactUs/>
        </div>
    );
};

export default Home;