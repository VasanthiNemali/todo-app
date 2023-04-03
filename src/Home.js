import React, { useState } from "react";
import { Todolist } from "./Todolist";
import "./Home.css";

const Home = () => {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);
  const changeHandle = (e) => {
    setTask(e.target.value);
  };
  const submitHandle = (e) => {
    e.preventDefault();

    //to add task and not miss the previous values
    const newTodo = [...todo, task];
    setTodo(newTodo);
    //to reset the feild
    setTask("");
  };
  const deleteHandle = (indexVal) => {
    const newTodo = todo.filter((todo, index) => index !== indexVal);
    setTodo(newTodo);
  };
  return (
    <center>
      <div className="page">
        <form onSubmit={submitHandle}>
          <input placeholder="Enter here....."
            className="input-feild"
            type="text"
            onChange={changeHandle}
            value={task}
            name="task"
          />{" "}
          &nbsp;
          <input className="add-btn" type="submit" value="ADD" name="ADD" />
        </form>

        <Todolist  todolist={todo} deleteHandler={deleteHandle} />
      </div>
    </center>
  );
};

export default Home;
