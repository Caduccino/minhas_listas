import { useState, useEffect } from 'react';
import axios from 'axios';
import DoneCard from "./DoneCard"

function CompletedTasks() {

    const [completedTasks, setCompletedTasks] = useState([])

    useEffect(() => {
        axios
            .get('http://localhost:3000/tasks')
            .then((response) => {
            setCompletedTasks([...response.data])
            console.log(completedTasks)
        })
        .catch(err => console.error(err))
    }, [])

    return (
        <div className="row">
            <div className="col-12 pb-1 pt-2">
                <h3 className="section-name">Tarefas concluídas</h3>
            </div>
            {completedTasks.filter(completedTask => 
                completedTask.unfinished === false).map(filteredCompletedTasks => (
                    <DoneCard
                    key={filteredCompletedTasks.id}
                    title= {filteredCompletedTasks.title}
                    body= {filteredCompletedTasks.body}
                    id= {filteredCompletedTasks.id}
                    class={'done-card'}
                    /> 
            ))}
        </div>
    )
}

export default CompletedTasks