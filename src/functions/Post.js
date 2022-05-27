import { useState } from "react";
const [post,setPost] = useState([])
import axios from "axios"
export const gettAllPost = async (user) => {
  try {
    const { data } = await axios.get(
      "http://localhost:8000/getgetAllPostAdmin"
    );
    setPost(data)
  } catch (error) {
    return error.response.data.message;
  }
};
