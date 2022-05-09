import React from 'react';
import Bannar from './Bannar';
import Care from './Care';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services/Services';
const Home = () => {
    return (
        <div className='px-12'>
            <Bannar/>
            <Info/>
            <Services/>
            <Care/>
            <MakeAppointment/>
        </div>
    );
};

export default Home;