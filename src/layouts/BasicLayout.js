import React from 'react';
import NavBarComponent from "../components/menu/NavBarComponent";

function BasicLayout({children}) {
    return (
        <>
            <NavBarComponent/>
            {children}


        </>
    );
}

export default BasicLayout;