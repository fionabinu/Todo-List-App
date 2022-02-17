import React from 'react';
import TodoInput from "./TodoInput";
import "./TodoList.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useSelector, useDispatch } from "react-redux";
import { completeTodo, addTodo, removeTodo, updateTodo } from "../redux/action";
import Todo from "./Todo";
import { useNavigate  } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const TodoList = () => {
    let navigate = useNavigate();
    const state = useSelector((state) => ({ ...state.todos }));
    let dispatch = useDispatch();

    const create = (newTodo) => {
        dispatch(addTodo(newTodo));
    };
    const update = (id, updatedTask) => {
        dispatch(updateTodo({ id, updatedTask }));
    };
    const submit = (todo) => {
        confirmAlert({
          title: 'Delete Items',
          message: 'Are you sure to do this.',
          buttons: [
            {
              label: 'Yes',
              onClick: () => dispatch(removeTodo(todo))
            },
            {
              label: 'No',
              onClick: () => console.log("nothing")
            }
          ]
        });
      };
    return (
        <div className='TodoList'>
            <h1>GoodBits App</h1>
            <button onClick={()=> navigate('/add')}>Add New Item</button>
            <ul>
                <TransitionGroup className="todo=list">
                    {state.todos &&
                        state.todos.map((todo) => {
                            return (

                                <CSSTransition key={todo.id} classNames="todo">
                                    <Todo
                                        key={todo.id}
                                        id={todo.id}
                                        task={todo.task}
                                        completed={todo.completed}
                                        toggleTodo={() => submit(todo)}
                                        removeTodo={() => submit(todo)}
                                        updateTodo={update}
                                    />
                                </CSSTransition>
                            );
                        })}
                </TransitionGroup>
            </ul>
        </div>
    );
};

export default TodoList;