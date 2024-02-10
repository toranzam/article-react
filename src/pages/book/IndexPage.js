import React, {useState} from 'react';
import {Outlet} from "react-router-dom";
import BasicLayout from "../../layouts/BasicLayout";
import {getBook} from "../../api/bookApi";

function IndexPage(props) {

    const [search, setSearch] = useState('')


    return (
        <BasicLayout>
            <div className={'pt-5 container justify-content-center'}>
                <h2>Book Api Test</h2>
                <input type={'text'} onChange={(event) => {
                    setSearch(event.target.value)
                    console.log(search)
                }}/>
                <button onClick={() => {
                    getBook(search)
                        .then(res => {
                            console.log(res)
                        })
                        .catch(() => {
                            console.log('요청실패')
                        })
                }}>Submit
                </button>
            </div>

        </BasicLayout>
    );
}

export default IndexPage;