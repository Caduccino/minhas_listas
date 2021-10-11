import ToDoCard from "./ToDoCard"

function MyTasks() {
    return (
        <div className="row">
            <div className="col-12 pb-1 pt-2">
                <h3 className="section-name">Minhas tarefas</h3>
            </div>
            <ToDoCard />
            <ToDoCard />
            <ToDoCard />
            <ToDoCard />
        </div>
    )
}

export default MyTasks