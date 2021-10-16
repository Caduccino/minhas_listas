import { useState, useEffect } from 'react';
import axios from 'axios';
import MyTasks from './MyTasks';
import CompletedTasks from './CompletedTasks';
function Home() {

    const [tasks, setTasks] = useState([])
    const getTasks = () => {
        axios
        .get('https://ironrest.herokuapp.com/minhas-tarefas')
        .then((response) => {
        setTasks([...response.data])
    })
    .catch(err => console.error(err))
    };

    useEffect(() => {
        getTasks();
    }, []);

    return (
        <>
<<<<<<< HEAD
        <Header tasks={tasks} />
=======
>>>>>>> ae5141405e062008d2bcbc0ceafa04372bf4b240
        <MyTasks tasks={tasks} getTasks={getTasks} />
        <CompletedTasks tasks={tasks} getTasks={getTasks} />
        </>
    )
}

export default Home