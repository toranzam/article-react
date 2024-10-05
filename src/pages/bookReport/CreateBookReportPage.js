import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {getBookByIsbn} from "../../api/bookApi";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'
import {postBookReport} from "../../api/bookReportApi";


const initServerData = {
    items: [],


}

const initBookReport = {
    title: '',
    content: '',
    isbn: '',
    image: '',
}


function CreateBookReportPage(props) {


    const {isbn} = useParams()

    const [serverDate, setServerData] = useState(initServerData);

    const [bookReport, setBookReport] = useState(initBookReport)

    const navigate = useNavigate()


    useEffect(() => {

        getBookByIsbn(isbn)
            .then(res => {
                setServerData(res)
                setBookReport(prevState => ({
                    ...prevState,
                    isbn: res.items[0].isbn,
                    image: res.items[0].image,
                }))



            })
            .catch(res => {
                console.log(res)
                console.log("isbn으로 bookDetail를 가져오는데 실패했습니다")
            })



    }, []);

    const handleSubmit = () => {
        postBookReport(bookReport).then(res => {
            navigate("/bookReport")
        }).catch(e => {
            navigate("/bookReport")
        })


    }

    const handleChangeBookReport = (e) => {

        console.log(e.target.name, e.target.value)
        bookReport[e.target.name] = e.target.value
        setBookReport({...bookReport})

        console.log('-------------')
        console.log(serverDate)


        console.log(bookReport)

    }


    return (

        <>
            {
                serverDate.items.map((item, index) =>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        gap: "1.5rem"
                    }}>
                        <div>
                            <div
                                style={{
                                    display: "flex",
                                    gap: "2.5em",
                                    padding: "4em 2.5em",
                                    borderRadius: "1em",
                                    width: "100%",
                                    // height: "100%",
                                    position: "relative",
                                    boxSizing: "border-box",
                                    overflow: "hidden",
                                    marginBottom: "30px",
                                }}>
                                <div style={{
                                    backgroundImage: 'url(' + item.image + ')',
                                    backgroundSize: "cover",
                                    opacity: "0.9",
                                    filter: 'blur(1em) brightness(0.5)',
                                    backdropFilter: 'blur(10px)',
                                    position: "absolute",
                                    left: "0",
                                    right: "0",
                                    top: "0",
                                    bottom: "0",
                                    zIndex: "-1",
                                    width: "100%",
                                }}></div>

                                <img
                                    src={item.image}
                                    style={{
                                        // width: "250px",
                                        height: "357px",
                                        background: "black",
                                        borderRadius: "0.75em",
                                    }}></img>
                                <div style={{
                                    maxWidth: "700px",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "1rem"

                                }}>
                                    <h2
                                        className={'text-white'}
                                        style={{
                                            // width: 700
                                            width: "100%",


                                        }}>
                                        {item.title}
                                    </h2>
                                    <p className={'text-white'}
                                       style={{
                                           width: "100%",
                                       }}
                                    >
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div style={{
                            display: "flex",
                            minWidth: "350px",
                            flexDirection: "column",
                            gap: "1.5em",
                        }}>
                            <div style={{
                                width: "100%",
                                boxSizing: "border-box",
                                borderRadius: "1em",
                                padding: "1.25em",
                                opacity: "0.8",
                            }} className={"bg-secondary"}>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "column"
                                }}>
                                    <p style={{
                                        color: "white",
                                        flex: "1",
                                        fontWeight: "700",
                                        fontSize: "1.25em",
                                    }}>
                                        작가
                                    </p>
                                    <div>
                                        <a style={{color: "white"}}>
                                            {item.author}
                                        </a>
                                    </div>
                                </div>
                            </div>


                            <div style={{
                                width: "100%",
                                boxSizing: "border-box",
                                borderRadius: "1em",
                                padding: "1.25em",
                                opacity: "0.8",
                            }} className={"bg-secondary"}>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "0.75em"
                                }}>
                                    <p style={{
                                        color: "white",
                                        flex: "1",
                                        fontWeight: "700",
                                        fontSize: "1.25em",
                                    }}>
                                        상세 내용
                                    </p>
                                    <div style={{padding: "0.75em"}}>
                                        <div style={{
                                            display: "flex",
                                            justifyContent: "center",
                                        }}>
                                            <div style={{
                                                display: "flex",
                                                flexDirection: "column",
                                                color: "white",
                                                flex: "1",
                                                justifyContent: "center",
                                                alignItems: "center",

                                            }}>
                                                <span style={{fontSize: "0.7em"}}>출판사</span>
                                                <span style={{
                                                    fontWeight: "700",
                                                    fontSize: "0.95em"
                                                }}>{item.publisher}</span>
                                            </div>
                                            <div style={{
                                                display: "flex",
                                                flexDirection: "column",
                                                color: "white",
                                                flex: "1",
                                                justifyContent: "center",
                                                alignItems: "center",
                                            }}>
                                                <span style={{fontSize: "0.7em"}}>발매일</span>
                                                <span style={{
                                                    fontWeight: "700",
                                                    fontSize: "0.95em"
                                                }}>{item.pubdate}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            <div style={{
                display: "flex",
                flexDirection: "column",
            }}>
                <div className={'mb-3'}>
                    <label className="form-label">제목</label>
                    <input name={"title"} className={"form-control"} value={bookReport.title}
                           onChange={handleChangeBookReport}></input>
                </div>

                <ReactQuill
                    style={{width: "100%", height: "600px"}} onChange={(e) => {
                    bookReport["content"] = e
                    setBookReport({...bookReport})
                    console.log(bookReport)
                }}
                />
                {/*<ReactQuill*/}
                {/*    style={{width: "100%", height: "600px"}} onChange={handleChangeBookReport}*/}

                {/*/>*/}
                <div style={{
                    margin: "55px 0 0 0",
                    display: "flex",
                    justifyContent: "end",
                }}>
                    <button className={'btn btn-secondary'} onClick={handleSubmit}>등록하기</button>
                </div>
            </div>
        </>
    );
}

export default CreateBookReportPage;