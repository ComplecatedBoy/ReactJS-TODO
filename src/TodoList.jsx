import { useState } from "react";
import ListItem from "./ListItem.jsx";
import { v4 as uuid } from "uuid";

function TodoList() {
  console.log("rendered");

  let [todoList, setTodoList] = useState([
    { task: "Eat", id: uuid(),isDone:false },
    { task: "Sleep", id: uuid(),isDone:false },
    { task: "Code", id: uuid(),isDone:true },
    { task: "loop", id: uuid(),isDone:false },
    { task: "die", id: uuid(),isDone:false },
  ]);

  let [newTodo, setNewTodo] = useState("");
  let [editId,seteditId]=useState("");
  let [msg,setMsg]=useState("");

  let handleFlashMessage=(msg)=>{
    setMsg(msg);
   setTimeout(()=>{
      setMsg("");
    },1000)
  }

  let handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  let handleAddOps = (e) => {

    if(editId){
      setTodoList(todoList.map((item)=>(item.id===editId?{...item,task:newTodo}:item)));
      handleFlashMessage("Todo has been updated!")
      setNewTodo("");
    }else{
      if(newTodo)
        {setTodoList((l) => [...l, { task: newTodo, id: uuid() }]);
        handleFlashMessage("New ToDo has been added")}
    }
    setNewTodo("");
  };

  let handleDeleteListItem = (id) => {
    setTodoList((l) => l.filter((item) => item.id != id));
    handleFlashMessage("ToDo has been deleted")
  };

  let handleEditListItem = (id) => {
    console.log(id)
    seteditId(id);
    setNewTodo(todoList.find((item)=>item.id==id).task)
  };

  let handleMarkDone=(id,isDone)=> {
    setTodoList(todoList.map((item)=>(item.id==id?{...item,isDone:isDone}:item)));
    console.log(id)
  }

  return (
    <div className="container">
      <h1 className="heading">TODO LIST</h1>
      <p className="message">{msg&&<>{msg}</>}</p>
      <hr />
      <div className="input-container">
        <input
          type="text"
          name=""
          id=""
          placeholder="Todo item"
          className="todo_inputBox"
          value={newTodo}
          onChange={(e) => {
            handleInputChange(e);
          }}
        />
        <button
          type="button"
          className="todo_addButton"
          onClick={(e) => {
            handleAddOps(e);
          }}
        >
          Submit
        </button>
      </div>
      <hr />
      <div className="list-container">
        <ul>
          {todoList.map((t) => (
            <ListItem key={t.id} onDelete={handleDeleteListItem} onEdit={handleEditListItem} onDone={handleMarkDone} isDone={t.isDone} id={t.id}>{t.task}</ListItem>
          ))}
        </ul>
      </div>
      
    </div>
  );
}

export default TodoList;
