import React, { useState } from 'react';
import { Backdrop } from '@mui/material';
import MenuNovedades from './MenuNovedades';
import SecundaryHeader from './SecundaryHeader';
import MainHeader from './MainHeader';

function Menu() { 

    const [openFilter, setOpenFilter] = useState(false);

    const [showNovedades, setShowNovedades] = useState(false);
    const handleShowNovedades = () => {
        setOpenFilter(true);
        setShowNovedades(true);
    }

    const handleHiddeNovedades = () => {
        setOpenFilter(false);
        setShowNovedades(false);
    }

    return (<nav className="row menu-row">
            <div className="col-12 sub-header-row">
                <SecundaryHeader/>
            </div>
            <div className="col-12 header-row">
                <MainHeader handleShowNovedades={handleShowNovedades} handleHiddeNovedades={handleHiddeNovedades}/>
            </div>
            <MenuNovedades showNovedades={showNovedades} handleShowNovedades={handleShowNovedades} handleHiddeNovedades={handleHiddeNovedades}/>
            <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 7 }} open={openFilter}></Backdrop>
        </nav>);  
};

export default Menu;
