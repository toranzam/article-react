import axios from "axios";


const API_SERVER_HOST = 'http://localhost:8080';

const prefix = `${API_SERVER_HOST}/api/bookReport`

export const getBookReportList = async (bookReport) =>{

    const res = await axios.get(
        prefix
    )

    return res.data

}

export const postBookReport = async (bookReport) =>{

    const res = await axios.post(
        `${prefix}/new`,
        bookReport,
    )

    return res.data

}

