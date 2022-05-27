import axios from axios
import { useState } from "react"
const [user,setUser] =useState([])
export const getAllUser = async()=>{
    try {
        const {data} = await axios.get('http://localhost:8000/getAllUser')
        setUser(data)
    } catch (error) {
        return error.response.data.message;
    }
}