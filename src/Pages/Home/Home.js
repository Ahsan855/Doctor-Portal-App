import React from 'react';
import Bannar from './Bannar';
import Info from './Info';
import Services from './Services/Services';
const Home = () => {
    return (
        <div className='px-12'>
            <Bannar/>
            <Info/>
            <Services/>
        </div>
    );
};

export default Home;