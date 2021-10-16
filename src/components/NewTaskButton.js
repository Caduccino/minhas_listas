import {Link} from 'react-router-dom';
function NewTaskButton() {

    return(
        <div className="col-auto pt-3 align-items-center d-flex">
            <Link to="/add"><button className="dark-button">Criar nova tarefa</button></Link>
        </div>
    )
}

export default NewTaskButton