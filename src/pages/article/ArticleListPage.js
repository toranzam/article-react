import React, {useEffect, useState} from 'react';
import {createSearchParams, useNavigate, useSearchParams} from "react-router-dom";
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

    /* api 로 가져온 데이터*/
    const [serverData, setServerData] = useState(initState)

    /* 쿼리스트링 추출 */
    const [queryParams] = useSearchParams()

    const page = getParam(queryParams.get('page'), 1)
    const size = getParam(queryParams.get('size'), 10)

    const queryStr = createSearchParams({page: page, size: size}).toString()

    /* page, size 가 변경되면 데이터 가져오기 */
    useEffect(() => {

        getList({page, size})
            .then(res => {
                console.log(res)
                setServerData(res)
            })
            .catch(res => {
                console.log("데이터를 가져오는데 실패하였습니다.")
            })

    }, [page, size]);

    const navigate = useNavigate()

    const onClickToDetail = (id) => {
        navigate({
            pathname: `/article/${id}`,
            search: queryStr
        })
    }

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
            {
                serverData.dtoList.map(article =>
                    <tr key={article.id}>
                        <th className={'col-1'}>{article.id}</th>
                        <td className={'col-7'} onClick={() => onClickToDetail(article.id)}>{article.title}</td>
                        <td className={'col-2'}>{article.writer}</td>
                        <td className={'col-2'}>{article.dueDate}</td>
                    </tr>
                )
            }
            </tbody>
        </table>
    );
}

export default ArticleListPage;