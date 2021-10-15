import { useState, useEffect } from 'react';
import axios from 'axios';
import ToDoCard from "./ToDoCard"

function CompletedTasks() {

    const [completedTasks, setCompletedTasks] = useState([])

    useEffect(() => {
        axios
            .get('http://localhost:3000/tasks')
            .then((response) => {
            setCompletedTasks([...response.data])
        })
        .catch(err => console.error(err))
    }, [completedTasks])

    return (
        <div className="row">
            <div className="col-12 pb-1 pt-2">
                <h3 className="section-name">Tarefas concluídas</h3>
            </div>
            {completedTasks.filter(completedTask => 
                completedTask.status === "inactive").map(filteredCompletedTasks => (
                    <ToDoCard
                    key={filteredCompletedTasks.id}
                    title= {filteredCompletedTasks.title}
                    body= {filteredCompletedTasks.body}
                    id= {filteredCompletedTasks.id}
                    /> 
            ))}
        </div>
    )
}

export default CompletedTasks