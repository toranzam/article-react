import React from 'react';
import BasicLayout from "../../layouts/BasicLayout";
import {Outlet} from "react-router-dom";

function IndexPage(props) {
    return (
        <BasicLayout>
            index
            <Outlet/>

        </BasicLayout>
    );
}

export default IndexPage;