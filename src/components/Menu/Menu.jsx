import React, { useState } from 'react';
import { Backdrop } from '@mui/material';
import MenuClothes from './MenuClothes';
import SecundaryHeader from './SecundaryHeader';
import MainHeader from './MainHeader';
import MenuOfertas from './MenuOfertas';

function Menu() { 

    const [openFilter, setOpenFilter] = useState(false);

    const [showClothes, setShowClothes] = useState(false);
    const handleShowClothes = () => {
        setOpenFilter(true);
        setShowClothes(true);
    }
    const handleHiddeClothes = () => {
        setOpenFilter(false);
        setShowClothes(false);
    }

    const [showOfertas, setShowOfertas] = useState(false);
    const handleShowOfertas = () => {
        setOpenFilter(true);
        setShowOfertas(true);
    }
    const handleHiddeOfertas = () => {
        setOpenFilter(false);
        setShowOfertas(false);
    }

    return (<nav className="row menu">
                <div className="col-12 secundary-header">
                    <SecundaryHeader/>
                </div>
                <div className="col-12 main-header"> 
                    <MainHeader handleShowClothes={handleShowClothes} handleHiddeClothes={handleHiddeClothes} handleShowOfertas={handleShowOfertas} handleHiddeOfertas={handleHiddeOfertas}/>
                </div>
                <MenuOfertas showOfertas={showOfertas} handleShowOfertas={handleShowOfertas} handleHiddeOfertas={handleHiddeOfertas}/>
                <MenuClothes showClothes={showClothes} handleShowClothes={handleShowClothes} handleHiddeClothes={handleHiddeClothes}/>
                <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 7 }} open={openFilter}></Backdrop>
            </nav>);  
};

export default Menu;
