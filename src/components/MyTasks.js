import { useState, useEffect } from 'react';
import axios from 'axios';
import ToDoCard from "./ToDoCard"

function MyTasks() {

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        axios
            .get('http://localhost:8000/tasks?status=active')
            .then((response) => {
            setTasks([...response.data])
            console.log(response)
        })
        .catch(err => console.error(err))
    }, [])

    return (
        <div className="row">
            <div className="col-12 pb-1 pt-2">
                <h3 className="section-name">Minhas tarefas</h3>
            </div>
            {tasks.map((task) => {
                return (    
                    <ToDoCard
                    key={task.id}
                    title= {task.title}
                    body= {task.body}
                    id= {task.id}
                    />     
                )  
            })}
        </div>
    )
}

export default MyTasks