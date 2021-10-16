import { useState, useEffect } from 'react';
import axios from 'axios';

import Header from './Header';

function Form(props) {
    const [formData, setFormData] = useState({
        title: "",
        body: "",
        unfinished: true,
        status: "active"
    });

    function handleChange(event) {
        setFormData({...formData, [event.target.name]: event.target.value});
    }

    function handleSubmit(event) {
        event.preventDefault()
        axios.post('https://ironrest.herokuapp.com/minhas-tarefas', formData)
        .then(response => {
        props.history.push('/')
        })
        .catch(err => console.error(err))
    }

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
            <Header tasks={tasks}/>
            <div className="row">
                <div className="col-12 pb-1 pt-2">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="title"><h3 className="section-name">Qual é a sua nova tarefa?</h3></label>
                        <div className="mb-3">
                            <input required onChange={handleChange} value={formData.title} type="text" name="title" id="title" className="form-control" />
                        </div>
                        <label htmlFor="body"><h3 className="section-name">Detalhe a sua tarefa</h3></label>
                        <div className="mb-3">
                            <input required onChange={handleChange}  value={formData.body} name="body" id="body" className="form-control" />
                        </div>
                        <button type="submit" className="dark-button">Adicionar nova tarefa</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Form