import axios from "axios";


const API_SERVER_HOST = 'http://localhost:8080'

const prefix = API_SERVER_HOST + '/api/book/list'

const prefix2 = API_SERVER_HOST + '/api/book/search'

export const getBookList = async (bookName) => {

    const res = await axios.get(
        `${prefix}`,
        {
            params: {bookName},
        }
    )

    return res.data

}

export const getBook = async (isbn) => {

    const res = await axios.get(
        `${prefix2}`,
        {
            params: {isbn}
        }
    )

    return res.data
}