import React, { useState } from 'react'

function Usestate() {
    const [todo, setTodo] = useState([]);
    const [task, setTask] = useState("");

    const addTask = () => {

        const newTodoList = [...todo, task];
        setTodo(newTodoList)
    }

    const deleteTask = (deleTask) => {
        const newTodoList = todo.filter((task) => {
            return task !== deleTask
        });
        setTodo(newTodoList)

    }


    const handlechange = (e) => {
        setTask(e.target.value)
    }

    return (
        <>
            <div>
                <input type="text" onChange={handlechange} />
                <button onClick={addTask}>Add</button>

            </div >
            <div className="list-items">
                {todo.map((task) => {
                    return (
                        <div className="">
                            <li >{task}</li>
                            <button onClick={() => deleteTask(task)}>Delete</button>
                        </div>
                    )
                })}

            </div>
        </>
    )
}

export default Usestate
