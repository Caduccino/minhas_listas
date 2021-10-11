import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import UserInfo from './UserInfo'
import './header.css'

function Header() {

    const [actionMovies, setActionMovies] = useState([])
  
    useEffect(() => {
        axios
            .get(`https://api.themoviedb.org/3/discover/movie?api_key=122e854ed857bc5ba82a4556152ee944&language=pt-BR&with_genres=28`)
            .then((response) => {
            setActionMovies([...response.data.results])
        })
        .catch(err => console.error(err))
    }, [])


    return (
        <div className="row">
            <UserInfo
            quantity= {actionMovies.length}
            />
            <div className="col-auto pt-3 align-items-center d-flex">
                <Link to="/add"><button className="dark-button">Criar nova tarefa</button></Link>
            </div>
            <hr className="my-4" />
        </div>   
    )
}

export default Header