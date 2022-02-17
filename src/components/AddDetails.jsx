import React, { useEffect, useState } from 'react';
import TodoInput from "./TodoInput";
import "./TodoList.css";
import {CSSTransition,TransitionGroup} from "react-transition-group";
import {useSelector,useDispatch} from "react-redux";
import { completeTodo ,addTodo,removeTodo,updateTodo} from "../redux/action";
import Todo from "./Todo";
import { useNavigate, useParams  } from "react-router-dom";

const AddDetails =(props)=> {
  let dispatch=useDispatch();
  let navigate = useNavigate();
  const { id } = useParams();
  const [updateItems, setUpdateItems] = useState({})
  const state = useSelector((state) => ({ ...state.todos }));
  useEffect(()=>{
    
    if(id){
        const updateItem = state && state.todos && state.todos.filter(items=>{
            return items.id == id
        })
        console.log(updateItem,'Fionaaaaaa', id)
        if(updateItem && updateItem.length >0){
            setUpdateItems(updateItem[0]);
        }
        
    }
    
  },[])
  const create=(data)=>{
      if(id){
          console.log("Fionaaaa123", id, data)
        dispatch(updateTodo({ "id":id, "updatedTask":data }));
      }else{
        dispatch(addTodo(data));
      }
      navigate("/");
  };
    return(
        <div className='TodoList'>
            <h1>GoodBits List</h1>
            <TodoInput createTodo={create} updateItems={updateItems}/>
        </div>
    );
};

export default AddDetails;