import React from 'react';
import BasicLayout from "../../layouts/BasicLayout";
import {Outlet} from "react-router-dom";

function IndexPage(props) {
    return (
        <BasicLayout>
            <div className={'container pt-5 d-flex justify-content-center'}>
                <Outlet/>
            </div>

        </BasicLayout>
    );
}

export default IndexPage;