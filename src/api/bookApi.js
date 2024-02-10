import axios from "axios";


const API_SERVER_HOST = 'https://openapi.naver.com'

// const prefix = API_SERVER_HOST + '/v1/search/book.json'

const prefix = '/v1/search/book.json'


export const getBook = async (query) => {

    // const headers = {
    //     'X-Naver-Client-Id' : 'L123ZF6QF0ufW8fyy30z',
    //     'X-Naver-Client-Secret' : 'FEwOuaCScR'
    // }

    const res = await axios.get(
        `${prefix}`,
        {
            params: {query},
            headers: {
                'X-Naver-Client-Id': 'L123ZF6QF0ufW8fyy30z',
                'X-Naver-Client-Secret': 'FEwOuaCScR'
            }
        }
    )

    return res.data

}