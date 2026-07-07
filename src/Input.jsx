import { useState } from 'react';
import { PlusSquareIcon } from 'lucide-react';

const Input = () => {

    //state variables 
    const [taskInput, changeTaskInput] = useState("");
    const [tasks, updateTasks] = useState([]);

    //submit / input updates
    const buttonClicked = () => {
        updateTasks([...tasks, taskInput]);
        changeTaskInput("");
        
    }
    const textEntered = (event) => {
        changeTaskInput(event.target.value);
    }
    return (
        <div className='flex items-center'>
            <input type="text" placeholder='Enter task here...' value={taskInput} onChange={textEntered} className='w-[600px] border-1 rounded-md bg-blue-600 text-white py-4 px-4 text-lg'/>
            <button onClick={buttonClicked} className='bg-green-600 h-15 w-20 rounded-md text-5xl flex justify-center items-center text-white hover:bg-green-500 active:bg-green-400 '>+</button>
        </div>
    )
}

export default Input;