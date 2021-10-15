import {Link} from 'react-router-dom';
import lixeira from '../img/lixo.svg';
import edit from '../img/edit.svg';
import './to-do-card.css';
import axios from 'axios';

function DoneCard(props) {
    function handleDelete (){
        axios
        .delete(`http://localhost:3000/tasks/${props.id}`)
        .then((response) => {
            console.log(response);
        })
        .catch((err) => console.error(err));
    }

    function handleReopen(){
        const objeto = {
            id:props.id,
            title:props.title,
            body: props.body,
            unfinished: true,
            status: "active"
        }
        axios
        .put(`http://localhost:3000/tasks/${props.id}`, objeto)
        .catch((err) => console.error(err));
    }
    

    return (
        
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 pb-3" key={props.id}>
            <div className={props.class}>
                <div className="content">
                    <h3 className="to-do-card-title">{props.title}</h3>
                    <p>{props.body}</p>
                </div>
                <div className="d-flex justify-content-between align-middle">
                    <div>
                    <button className="dark-button" onClick={handleReopen}>Reabrir</button>
                    </div>
                    <div className="d-flex align-middle">
                        <img className="me-3 lixeira" src={ lixeira } alt="Deletar tarefa" onClick={handleDelete}/>
                        <Link className="link-tag" to={`/update/${props.id}`}><img src={ edit } alt="Editar tarefa" /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DoneCard