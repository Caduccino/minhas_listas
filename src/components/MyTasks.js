import ToDoCard from "./ToDoCard"

function MyTasks(props) {

    return (
        <div className="row">
            <div className="col-12 pb-1 pt-2">
                <h3 className="section-name">Minhas tarefas</h3>
            </div>
            {props.tasks.filter(task => 
                task.unfinished).map(filteredTask => (
                    <ToDoCard
                    key={filteredTask._id}
                    title= {filteredTask.title}
                    body= {filteredTask.body}
                    id= {filteredTask._id}
                    class={'to-do-card'}
                    getTasks={props.getTasks}
                    /> 
            ))}
        </div>
    )
}

export default MyTasks