import React, {useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";
import {getList} from "../../api/articleApi";


const getParam = (param, defaultValue) => {
    if (!param) {
        return defaultValue;
    }

    return parseInt(param)

}

const initState = {
    dtoList: [],
}


function ArticleListPage(props) {

    const [serverData, setServerData] = useState(initState)

    // 쿼리스트링 추출
    const [queryParams] = useSearchParams()

    const page = getParam(queryParams.get('page'), 1)
    const size = getParam(queryParams.get('size'), 10)


    useEffect(() => {

        getList({page, size})
            .then(res => {
                console.log(res)
                setServerData(res)

            })

    }, [page, size]);


    return (
        <table className="table table-striped">
            <thead>
            <tr>
                <th className={'col-1'}>id</th>
                <th className={'col-7'}>제목</th>
                <th className={'col-2'}>작성자</th>
                <th className={'col-2'}>작성일</th>
            </tr>
            </thead>
            <tbody>
            {serverData.dtoList.map(article =>
                <tr key={article.id}>
                    <th className={'col-1'}>{article.id}</th>
                    <td className={'col-7'}>{article.title}</td>
                    <td className={'col-2'}>{article.writer}</td>
                    <td className={'col-2'}>{article.dueDate}</td>
                </tr>
            )}

            </tbody>
        </table>
    );
}

export default ArticleListPage;