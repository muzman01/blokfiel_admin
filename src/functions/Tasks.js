import axios from "axios";
import { useState } from "react";
const [allTask, setAllTask] = useState([]);
export const getTask = async () => {
  try {
    const { data } = await axios.get("http://localhost:8000/getAllTasks");
    setAllTask(data);
  } catch (error) {
    return error.response.data.message;
  }
};
export const addTask = async (
  taskName,
  taskDesc,
  taskUser,
  taskLinks,
  taskDateDay,
  taskDateMonth,
  TaskDateYear
) => {
  try {
    const { data } = await axios.post("http://localhost:8000/createTask", {
      taskName,
      taskDesc,
      taskUser,
      taskLinks,
      taskDateDay,
      taskDateMonth,
      TaskDateYear,
    });
    return "ok";
  } catch (error) {
    return error.response.data.message;
  }
};
export const updateTaskState = async (taskState,newState) => {
  try {
    const { data } = await axios.put("http://localhost:8000/updateTaskState", {
      taskState,
      newState
    });
    return "ok";
  } catch (error) {
    return error.response.data.message;
  }
};
export const updateTaskUser = async (taskUser,taskName) => {
  try {
    const { data } = await axios.put("http://localhost:8000/updateTaskUser", {
      taskUser,
      taskName
    });
    return "ok";
  } catch (error) {
    return error.response.data.message;
  }
};
