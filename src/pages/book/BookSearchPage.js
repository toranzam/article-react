import React, {useState} from 'react';

import {getBookByIsbn, getBookList} from "../../api/bookApi";
import BookModalComponent from "../../components/modal/BookModalComponent";
import {useNavigate} from "react-router-dom";
import createBookReportPage from "./CreateBookReportPage";


const initServerData = {
    items: [],
    title: '',
    link: '',
    author: '',
    description: '',
    image: '',

}

function BookSearchPage(props) {

    const [search, setSearch] = useState()

    const [serverData, setServerData] = useState(initServerData)

    const [show, setShow] = useState(false)

    const [selectedItem, setSelectedItem] = useState({
        image: '',
        title: '',
        description: '',
        isbn: '',
    });

    const navigate = useNavigate()


    const handleShow = (item) => {
        setShow(true)
        setSelectedItem(item)


    }

    const handleClose = () => {
        setShow(false)

    }

    const handleSubmit = () => {
        navigate({
            pathname: `/book/new/${selectedItem.isbn}`
        })
        // getBook(selectedItem.isbn)
        //     .then(res => {
        //         console.log(res)
        //     })
        //     .catch((() => {
        //         console.log("getBook 요청 실패")
        //     }))

    }

    return (
        <>
            <div className={'pt-5  d-flex justify-content-center  '}>
                <div className={'d-flex justify-content-center flex-column'}>
                    <h2 className={'mb-5 text-center'}>책 검색</h2>
                    <div className={'d-flex justify-content-center gap-1'}>
                        <input placeholder={'책 제목을 입력해주세요'}
                               className={'rounded-1 border-1 px-3'}
                               type={'text'}
                               style={{width: "500px"}}
                               onChange={(e) => {
                                   setSearch(e.target.value)
                                   console.log(search)
                               }}/>
                        <button className={'btn btn-primary px-4'} onClick={() => {
                            getBookList(search)
                                .then(res => {
                                    setServerData(res)
                                    console.log(res)
                                })
                                .catch(() => {
                                    setServerData({...initServerData})
                                    console.log('요청실패')
                                })
                        }}>검색
                        </button>
                    </div>
                </div>
            </div>


            {/*BootStrap 이용*/}
            {/*<div className={'container pt-5'}>*/}
            {/*    <div className={'flex-wrap row d-flex'}>*/}

            {/*        {*/}
            {/*            serverData.items.map((item, index) =>*/}

            {/*                <div className={'col-md-2 px-2 py-2'} key={index}>*/}
            {/*                    <Card>*/}
            {/*                        <Card.Img variant="top" src={item.image} style={{height:'400px', objectFit:'cover'}}/>*/}
            {/*                        <Card.Body>*/}
            {/*                            <Card.Title>{item.title}</Card.Title>*/}
            {/*                            /!*<Card.Text>{item.description}</Card.Text>*!/*/}
            {/*                            <Button variant="primary">상세보기</Button>*/}
            {/*                        </Card.Body>*/}
            {/*                    </Card>*/}
            {/*                </div>*/}
            {/*            )*/}
            {/*        }*/}
            {/*    </div>*/}
            {/*</div>*/}


            <div
                className={' flex-wrap'}
                style={{
                    display: 'flex',
                    paddingTop: '5rem',
                    flexWrap: "wrap"
                }}>
                {
                    serverData.items.map((item, index) =>
                        <div
                            key={index}
                            style={{
                                flex: '0 0 calc(20% - 1rem)',
                                margin: '0.5rem',
                                height: '430px',
                                boxShadow: '0 0 10px rgba(0,0,0,0.1)',
                                borderRadius: '0.25rem',
                            }}
                        >
                            <div>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    style={{
                                        width: '100%',
                                        height: '300px',
                                        objectFit: 'cover'
                                    }}
                                />
                                <div style={{
                                    height: '130px',
                                    padding: '1rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                    <h5 style={{
                                        width: '100%',
                                        textOverflow: 'ellipsis',
                                        overflow: "hidden",
                                        whiteSpace: "normal",
                                        display: '-webkit-box',
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: "vertical"
                                    }}>{item.title}</h5>
                                    <div style={{
                                        width: '100%',
                                        display: 'flex',
                                        justifyContent: 'end'
                                    }}>
                                        <button
                                            className={'btn btn-primary'}
                                            onClick={() => handleShow(item)}>상세보기
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

            <BookModalComponent
                show={show}
                handleSubmit={handleSubmit}
                handleClose={handleClose}
                item={selectedItem}
            />


        </>
    );
}

export default BookSearchPage;