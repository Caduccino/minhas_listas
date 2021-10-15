import { useState, useEffect } from 'react';
import axios from 'axios';
import MyTasks from './MyTasks';
import CompletedTasks from './CompletedTasks';
import Header from './Header';
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
        <Header />
        <MyTasks tasks={tasks} getTasks={getTasks} />
        <CompletedTasks tasks={tasks} getTasks={getTasks} />
        </>
    )

}

export default Home