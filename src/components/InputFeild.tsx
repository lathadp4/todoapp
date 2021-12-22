import React, { useRef } from 'react';
import "./styles.css";
import FlipMove from 'react-flip-move';
import SingleTodo from './SingleTodo';

interface props {
    todo: string;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    handleAdd:(e: React.FormEvent) => void;
}

const InputFeild: React.FC<props> = ({ todo, setTodo, handleAdd }) => {
const inputRef = useRef<HTMLInputElement>(null);

    return (
        <form className='input' onSubmit={(e) => {
            handleAdd(e)
            inputRef.current?.blur();
        }   }>
            <input
            ref={inputRef}
            type="input" 
            value={todo}
            onChange={ (e) => setTodo(e.target.value)}
            placeholder='Enter text' className='input_box' />
            <button className='input_submit' type='submit'>Submit</button>
        </form>
    )
    return(
        <div>
            <FlipMove duration={500} easing="ease-in-out">
                {InputFeild}
            </FlipMove>
            </div>
      )
}

export default InputFeild;
