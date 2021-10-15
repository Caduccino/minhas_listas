import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import UserInfo from './UserInfo'
import './header.css'

function Header() {

    const [tasks, setTasks] = useState([])

    
    useEffect(() => {
        axios
            .get(`http://localhost:3000/tasks/?status=active`)
            .then((response) => {
            setTasks([...response.data])
        })
        .catch(err => console.error(err))
    }, [])

    return (
        <div className="row">
            <UserInfo
            quantity= {tasks.length}
            />
            <div className="col-auto pt-3 align-items-center d-flex">
                <Link to="/add"><button className="dark-button">Criar nova tarefa</button></Link>
            </div>
            <hr className="my-4" />
        </div>   
    )
}

export default Header