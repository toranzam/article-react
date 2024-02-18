import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {getOne} from "../api/articleApi";


const initState = {
    id: '',
    title: '',
    content: '',
    author: '',
    localDate: '',
}

function ArticleDetailComponent(props) {

    const [serverData, setServerData] = useState(initState)

    const {id} = useParams()


    useEffect(() => {


        getOne(id)
            .then(res => {
                setServerData(res)
                console.log("요청 성공")

            })
            .catch(res => {
                console.log(res)
                console.log("요청 실패")

            })
    }, []);

    return (
        <div>
            <div className={'d-flex justify-content-center '}>
                <div className={'d-flex justify-content-between w-75 p-4 shadow rounded'}>
                    <div className={'d-flex flex-column gap-2'}>
                        <h2>{serverData.title}</h2>
                        <p>{serverData.content}</p>
                    </div>
                    <div className={'d-flex flex-column align-items-md-end'}>
                        <p>작성자:홍길동</p>
                        <time>{serverData.localDate}</time>
                    </div>
                </div>
            </div>
            <div className={'d-flex justify-content-center pt-2 '}>
                <div className={'w-75 d-flex justify-content-between'}>
                    <div>
                        <Link to={'/article'} className={'btn btn-primary'}>목록</Link>
                    </div>
                    <div className={'d-flex gap-2'}>
                        <button className={'btn btn-danger'}>삭제</button>
                        <button className={'btn btn-success'}>수정</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ArticleDetailComponent;