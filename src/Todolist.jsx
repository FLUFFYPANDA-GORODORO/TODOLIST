import { list } from 'postcss';
import React , {useState} from 'react';
function Todolist(){


    const [tasks,setTasks] = useState(["Eat Breakfast","Sleep on time","Learn React"]);
    const [newTask,setNewTask] = useState();

    function handleInputChange(event){
        setNewTask(event.target.value); 

    }

    function addTask(){

        if(newTask.trim() !== ""){

        setTasks(t => [...t,newTask]); 
        setNewTask("");
        }
    }

    function deleteTask(index){
        const updateTask = tasks.filter((_,i) => i !== index);
        setTasks(updateTask);
    }

  

    return(
        <div className='to-do-list'>
            <h1>To-do-list</h1>
            <div>
                <input 
                type="text"
                placeholder='Enter a task...'
                value={newTask}
                onChange={handleInputChange}
                />
                <button className='add-button' onClick={addTask}>
                    Add
                </button>
            </div>

            <ol>
                {tasks.map((task,index ) =>
                <li key={index}>
                    <span className='text'>{task}</span>
                    <button className='delete-button' onClick={() => deleteTask(index)}>
                        Delete
                    </button>
                </li>
                )}
            </ol>
        </div>


    );
}

export default Todolist