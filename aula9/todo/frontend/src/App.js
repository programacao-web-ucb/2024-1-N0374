import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import api from "./services/api";
import { IoMdDoneAll } from "react-icons/io";
import { MdClose } from "react-icons/md";


function App() {
  const [todos, setTodos] = useState([]);
  const [newTodoName, setNewTodoName] = useState("");

  function getTodos() {
    return todos.map((todo, ix) => {
      return (
        <li key={ix}> {todo.name} 
          {todo.done ? <IoMdDoneAll style={{color: "green"}} /> :
                 <MdClose  style={{color: "red"}}/>}
    </li>)})
  }

  function handleTodoName(e){
    setNewTodoName(e.target.value);
    console.log(newTodoName)
  }

  function addTodo(){
    api
      .post("/todos", {
        name: newTodoName,
        done: false
      })
      .then((response) => {setTodos(response.data);setNewTodoName("");})
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }

  useEffect(() => {
    api
      .get("/todos")
      .then((response) => setTodos(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <div className="App">
      <h1>Lista de tarefas</h1>
      <ul>{getTodos()}</ul>
      <h2>Adicionar tarefa</h2>
      <input value={newTodoName} onChange={handleTodoName}></input>
      <button onClick={addTodo}>Adicionar</button>
    </div>
  );
}

export default App;
