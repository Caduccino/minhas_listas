import { useState, useEffect } from 'react';
import axios from 'axios';
import ToDoCard from "./ToDoCard"

function MyTasks() {

    const [actionMovies, setActionMovies] = useState([])
  
    useEffect(() => {
        axios
            .get(`https://api.themoviedb.org/3/discover/movie?api_key=122e854ed857bc5ba82a4556152ee944&language=pt-BR&with_genres=28`)
            .then((response) => {
            setActionMovies([...response.data.results])
            console.log(response)
        })
        .catch(err => console.error(err))
    }, [])

    return (
        <div className="row">
            <div className="col-12 pb-1 pt-2">
                <h3 className="section-name">Minhas tarefas</h3>
            </div>
            {actionMovies.map((actionMoviesObject) => {
                return (    
                    <ToDoCard
                    key={actionMoviesObject.id}
                    title= {actionMoviesObject.title}
                    body= {actionMoviesObject.overview}
                    />     
                )  
            })}
        </div>
    )
}

export default MyTasks