import UserInfo from './UserInfo'
import './header.css'

function Header() {
    return (
        <div className="row">
            <UserInfo />
            <div className="col-auto pt-3 align-items-center d-flex">
                <button className="dark-button">Criar nova tarefa</button>
            </div>
            <hr className="my-4" />
        </div>   
    )
}

export default Header