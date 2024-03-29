import axios from "axios";


const API_SERVER_HOST = 'http://localhost:8080'

const prefix = `${API_SERVER_HOST}/api/article`

export const getList = async (pageParam) => {

    const {page, size} = pageParam

    const res = await axios.get(`${prefix}/list`, {params:{page, size}})

    return res.data

}

export const getOne = async (id) => {

    const res = await axios.get(`${prefix}/${id}`)

    return res.data
}

export const postAdd = async (article) => {

    const res = await axios.post(`${prefix}`, article)

    return res.data

}