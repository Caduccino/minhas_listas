import { useState, useEffect } from 'react';
import axios from 'axios';
import MyTasks from './MyTasks';
import CompletedTasks from './CompletedTasks';
function Home() {

    const [tasks, setTasks] = useState([])
    const getTasks = () => {
        axios
        .get('http://localhost:3000/tasks')
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
        <MyTasks tasks={tasks} getTasks={getTasks} />
        <CompletedTasks tasks={tasks} getTasks={getTasks} />
        </>
    )
}

export default Home