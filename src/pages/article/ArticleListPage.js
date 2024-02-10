import React, {useEffect, useState} from 'react';
import {createSearchParams, useNavigate, useSearchParams} from "react-router-dom";
import {getList, postAdd} from "../../api/articleApi";
import ModalCompoenent from "../../components/ModalComponent";


const getParam = (param, defaultValue) => {
    if (!param) {
        return defaultValue;
    }
    return parseInt(param)

}

const initServerData = {
    dtoList: [],
}


const initArticle = {
    title: '',
    content: ''
}


function ArticleListPage(props) {

    /* api 로 가져온 데이터*/
    const [serverData, setServerData] = useState(initServerData)

    const [article, setArticle] = useState(initArticle)

    const [show, setShow] = useState(false)

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


    const handleShow = () => {
        setShow(true)
    }

    const handleSubmit = () => {
        postAdd(article)
            .then(res => {
                setShow(false)
                setArticle({...initArticle})
                console.log('postAdd 성공')

                getList(page, size)
                    .then( res => {
                        setServerData(res)
                        console.log('getList 성공')
                    })
                    .catch( res => {
                        console.log('데이터를 가져오는데 실패하였습니다.')
                    })

            })
            .catch(res => {
                console.log('실패')
            })


        getList({page, size})
            .then(res => {
                console.log(res)
                setServerData(res)
            })
            .catch(res => {
                console.log("데이터를 가져오는데 실패하였습니다.")
            })

    }

    const handleClose = () =>{

        setShow(false)

    }


    const handleChaneArticle = (event) => {

        article[event.target.name] = event.target.value

        setArticle({...article})

        console.log(article)

    }



    return (
        <>
            <div className={'d-flex justify-content-end'}>
                <button className={'btn btn-primary'} onClick={handleShow}>새 게시글</button>
            </div>

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
                    serverData.dtoList.map(a =>
                        <tr key={a.id}>
                            <th className={'col-1'}>{a.id}</th>
                            <td className={'col-7'} onClick={() => onClickToDetail(a.id)}>{a.title}</td>
                            <td className={'col-2'}>{a.author}</td>
                            <td className={'col-2'}>{a.localDate}</td>
                        </tr>
                    )
                }
                </tbody>
            </table>

            <ModalCompoenent
                show={show}
                handleSubmit={handleSubmit}
                handleClose={handleClose}
                handleChaneArticle={handleChaneArticle}
                article={article}/>
        </>
    );
}

export default ArticleListPage;