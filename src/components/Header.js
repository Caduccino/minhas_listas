import {Link} from 'react-router-dom';
import UserInfo from './UserInfo'
import './header.css'

function Header(props) {

    return (
        <div className="row">
            <UserInfo
<<<<<<< HEAD
            quantity={props.tasks.filter(task => task.unfinished).length}
=======
            userName={props.userName}
            quantity={props.quantity}
>>>>>>> ae5141405e062008d2bcbc0ceafa04372bf4b240
            />
            <div className="col-auto pt-3 align-items-center d-flex">
                <Link to="/add"><button className="dark-button">Criar nova tarefa</button></Link>
            </div>
            <hr className="my-4" />
        </div>   
    )
}

export default Header