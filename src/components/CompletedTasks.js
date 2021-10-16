import { useEffect } from 'react';
import axios from 'axios';
import DoneCard from "./DoneCard"

function CompletedTasks(props) {

    useEffect(() => {
        axios
            .get('https://ironrest.herokuapp.com/minhas-tarefas?status=active')
            .then((response) => {
            props.getTasks()
        })
        .catch(err => console.error(err))
    }, [])

    return (
        <div className="row">
            <div className="col-12 pb-1 pt-2">
                <h3 className="section-name">Tarefas concluídas</h3>
            </div>
            
            {props.tasks.filter(task => 
                task.unfinished === false).map(filteredTask => (
                    <DoneCard
                    key={filteredTask._id}
                    title= {filteredTask.title}
                    body= {filteredTask.body}
                    id= {filteredTask._id}
                    class={'done-card'}
                    getTasks={props.getTasks}
                    /> 
            ))}
        </div>
    )
}

export default CompletedTasks