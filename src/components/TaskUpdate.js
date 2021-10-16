import { useState, useEffect } from "react";
import { useParams } from 'react-router';
import axios from 'axios';

<<<<<<< HEAD
import Header from './Header';


=======
>>>>>>> ae5141405e062008d2bcbc0ceafa04372bf4b240
function TaskUpdate(props) {
    const [formData, setFormData] = useState({
        title: "",
        body: "",
        status: "active"
    });
    const { id } = useParams();
    useEffect(() => {
        axios
          .get(`https://ironrest.herokuapp.com/minhas-tarefas/${id}`)
          .then((response) => {
            console.log(response);
            setFormData({ ...response.data });
          })
          .catch((err) => console.error(err));
      }, [id]);
    function handleChange(event) {
        setFormData({...formData, [event.target.name]: event.target.value});
    }
    function handleSubmit(event){
        event.preventDefault()
        delete formData._id
        axios
        .put(`https://ironrest.herokuapp.com/minhas-tarefas/${id}`, formData)
        .then(response => {
            props.history.push('/')
        })
        .catch((err) => console.error(err));
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

    return(
        <>
<<<<<<< HEAD
        <Header tasks={tasks} />
=======
>>>>>>> ae5141405e062008d2bcbc0ceafa04372bf4b240
            <div className="row">
                <div className="col-12 pb-1 pt-2">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="title"><h3 className="section-name">Nome da tarefa </h3></label>
                        <div className="mb-3">
                            <input required onChange={handleChange} value={formData.title} type="text" name="title" id="title" className="form-control" />
                        </div>
                        <label htmlFor="body"><h3 className="section-name">Detalhe da tarefa</h3></label>
                        <div className="mb-3">
                            <input required onChange={handleChange}  value={formData.body} name="body" id="body" className="form-control" />
                        </div>
                        <button type="submit" className="dark-button">Atualizar tarefa</button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default TaskUpdate