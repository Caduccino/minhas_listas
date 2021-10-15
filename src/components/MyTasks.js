import { useState, useEffect } from 'react';
import axios from 'axios';
import ToDoCard from "./ToDoCard"

function MyTasks() {

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        axios
            .get('http://localhost:3000/tasks')
            .then((response) => {
            setTasks([...response.data])
        })
        .catch(err => console.error(err))
    }, [])

    return (
        <div className="row">
            <div className="col-12 pb-1 pt-2">
                <h3 className="section-name">Minhas tarefas</h3>
            </div>
            {tasks.filter(task => 
                task.unfinished).map(filteredTask => (
                    <ToDoCard
                    key={filteredTask.id}
                    title= {filteredTask.title}
                    body= {filteredTask.body}
                    id= {filteredTask.id}
                    class={'to-do-card'}
                    /> 
            ))}
        </div>
    )
}

export default MyTasks