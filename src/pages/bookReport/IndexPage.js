import React from 'react';
import BasicLayout from "../../layouts/BasicLayout";
import {Outlet} from "react-router-dom";

function IndexPage(props) {
    return (
        <BasicLayout active={3}>
            <div className={'pt-5 container justify-content-center'}>
                독후감 페이지
                <Outlet/>
            </div>
        </BasicLayout>
    );
}

export default IndexPage;