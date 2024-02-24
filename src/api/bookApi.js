import axios from "axios";


const API_SERVER_HOST = 'http://localhost:8080'

const prefix = API_SERVER_HOST + '/api/book/list'

export const getBookList = async (query) => {

    const res = await axios.get(
        `${prefix}`,
        {
            params: {query},
        }
    )

    return res.data

}