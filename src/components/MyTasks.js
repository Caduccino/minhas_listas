import { useEffect } from 'react';
import axios from 'axios';
import ToDoCard from "./ToDoCard"

function MyTasks(props) {

    useEffect(() => {
        axios
            .get('http://localhost:3000/tasks')
            .then((response) => {
            props.getTasks()
        })
        .catch(err => console.error(err))
    }, [])

    return (
        <div className="row">
            <div className="col-12 pb-1 pt-2">
                <h3 className="section-name">Minhas tarefas</h3>
            </div>
            {props.tasks.filter(task => 
                task.unfinished).map(filteredTask => (
                    <ToDoCard
                    key={filteredTask.id}
                    title= {filteredTask.title}
                    body= {filteredTask.body}
                    id= {filteredTask.id}
                    class={'to-do-card'}
                    getTasks={props.getTasks}
                    /> 
            ))}
        </div>
    )
}

export default MyTasks