import { useState, useEffect } from 'react';
import axios from 'axios';
import ToDoCard from "./ToDoCard"

function CompletedTasks() {

    const [completedTasks, setCompletedTasks] = useState([])
  
    useEffect(() => {
        axios
            .get('http://localhost:8000/tasks?status=inactive')
            .then((response) => {
            setCompletedTasks([...response.data])
            console.log(response)
        })
        .catch(err => console.error(err))
    }, [])

    return (
        <div className="row">
            <div className="col-12 pb-1 pt-2">
                <h3 className="section-name">Tarefas concluídas</h3>
            </div>
            {completedTasks.map((completedTask) => {
                return (    
                    <ToDoCard
                    key={completedTask.id}
                    title= {completedTask.title}
                    body= {completedTask.body}
                    />     
                )  
            })}
        </div>
    )
}

export default CompletedTasks