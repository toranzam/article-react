import React, {useEffect, useState} from 'react';
import {getBookReportList} from "../api/bookReportApi";


const initServerData = {
    bookReportList: [],

}

function BookReportListComponent(props) {

    const [serverData, setServerData] = useState({...initServerData});

    useEffect(() => {

        getBookReportList()
            .then(res => {
                setServerData(res)
                console.log(res)

            })
            .catch(err => {
                console.log("데이터를 가져오는데 실패하였습니다")
            })

    }, [])

    return (
        <>
            <div className={'d-flex justify-content-end'}>
                <button className={'btn btn-primary'}>새 게시글</button>
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
                    serverData.bookReportList.map(b =>
                        <tr key={b.id}>
                            <th className={'col-1'}>{b.id}</th>
                            <td className={'col-7'}>{b.title}</td>
                            <td className={'col-2'}></td>
                            <td className={'col-2'}>{b.createAt}</td>
                        </tr>
                    )
                }
                </tbody>
            </table>


        </>
    );
}

export default BookReportListComponent;