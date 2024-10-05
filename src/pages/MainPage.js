import React from 'react';
import BasicLayout from "../layouts/BasicLayout";

function MainPage(props) {
    return (
        <BasicLayout>
            <div className={'container p-5 d-flex justify-content-center'}>
                        <h1>안녕하세요!</h1>
            </div>


        </BasicLayout>
    );
}

export default MainPage;