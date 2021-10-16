import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header'
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
        <Header quantity={tasks.filter(task => task.unfinished).length} />
        <MyTasks tasks={tasks} getTasks={getTasks} />
        <CompletedTasks tasks={tasks} getTasks={getTasks} />
        </>
    )
}

export default Home