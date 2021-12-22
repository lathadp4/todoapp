import React from "react";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";
import './styles.css';
import FlipMove from "react-flip-move";

interface props{
    todos: Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({todos, setTodos}: props) => {
    return (
        <div className='todos'>
            {todos.map((todo) => (
                <SingleTodo todo={todo} key={todo.id}
                todos={todos} 
                setTodos={setTodos}
                />
            ))
            }
            
        </div>
    );
    return(
        <div>
            <FlipMove duration={500} easing="ease-in-out">
                {TodoList}
            </FlipMove>
            </div>
      )
};

export default TodoList;
