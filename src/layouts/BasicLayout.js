import React from 'react';
import NavBarComponent from "../components/menu/NavBarComponent";

function BasicLayout({children, active}) {
    return (
        <>
            <NavBarComponent active={active}/>
            {children}


        </>
    );
}

export default BasicLayout;