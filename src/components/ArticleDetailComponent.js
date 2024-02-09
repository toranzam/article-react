import React from 'react';
import {Link} from "react-router-dom";

function ArticleDetailComponent(props) {

    return (
        <div>
            <div className={'d-flex justify-content-center '}>
                <div className={'d-flex justify-content-between w-75 p-4 shadow rounded'}>
                    <div className={'d-flex flex-column gap-2'}>
                        <h2>제목</h2>
                        <p>content</p>
                    </div>
                    <div className={'d-flex flex-column align-items-md-end'}>
                        <p>작성자:홍길동</p>
                        <time>2024.2.4</time>
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