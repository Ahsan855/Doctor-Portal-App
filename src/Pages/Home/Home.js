import React from 'react';
import Bannar from './Bannar';
import Care from './Care';
import ContactUs from './ContactUs';
import Footer from './Footer';
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
            <ContactUs/>
            <Footer/>
        </div>
    );
};

export default Home;