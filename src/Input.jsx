import { useState } from 'react';
import { PlusSquareIcon } from 'lucide-react';
import TaskComponent from './TaskComponent';

const Input = () => {

    //state variables 
    const [taskInput, changeTaskInput] = useState("");
    const [tasks, updateTasks] = useState([]);

    //submit / input updates
    const buttonClicked = () => {
        const newTaskObj = {
            content: taskInput,
            isCompleted : false
        }
        updateTasks([...tasks, newTaskObj]);
        const tasksupdated = [...tasks, newTaskObj]
        console.log(tasksupdated)
        changeTaskInput("");
        
    }
    const textEntered = (event) => {
        changeTaskInput(event.target.value);
    }
    const completeTask = (id) => {
        const updated = tasks.map((item, index) => {
            if (index == id) {
                return { content: item.content, isCompleted: item.isCompleted ? false : true };
            } else return item;
        })
        updateTasks(updated);
        
    };
    const moveTaskUp = (id) => {
        
        const updated = [...tasks]
        if (id != 0) {
            let temp = updated[id-1];
            updated[id - 1] = updated[id];
            updated[id] = temp;
        }
        updateTasks(updated);
    };
    const moveTaskDown = (id) => {
        const updated = [...tasks];
        if (id != tasks.length-1) {
          let temp = updated[id + 1];
          updated[id + 1] = updated[id];
          updated[id] = temp;
        }
        updateTasks(updated);
    };
    const deleteTask = (id) => {
        const update = tasks.filter((item, index) => {
            return id != index;
        })
        updateTasks(update);
    };

    return (
      <div>
        <div className="flex items-center mb-4">
          <input
            type="text"
            placeholder="Enter task here..."
            value={taskInput}
            onChange={textEntered}
            className="w-[600px] border-1 rounded-md bg-blue-600 text-white py-4 px-4 text-lg"
          />
          <button
            onClick={buttonClicked}
            className="bg-green-600 h-15 w-20 rounded-md text-5xl flex justify-center items-center text-white hover:bg-green-500 active:bg-green-400 "
          >
            +
          </button>
        </div>
            <div className="flex flex-col ">
                {tasks.map((task, index) => {
                    return (
                      <TaskComponent
                        key={index}
                        index={index}
                        content={task.content}
                        isCompleted={task.isCompleted}
                        onDel={deleteTask}
                        onUp={moveTaskUp}
                        onDown={moveTaskDown}
                        onComplete={completeTask}
                      />
                    );
                })}
        </div>
      </div>
    );
}

export default Input;