import {Link} from 'react-router-dom';
import lixeira from '../img/lixo.svg';
import edit from '../img/edit.svg';
import './to-do-card.css';

function ToDoCard(props) {
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 pb-3" key={props.id}>
            <div className="to-do-card">
                <div className="content">
                    <h3 className="to-do-card-title">{props.title}</h3>
                    <p>{props.body}</p>
                </div>
                <div className="d-flex justify-content-between align-middle">
                    <div>
                    <button className="dark-button">Concluir</button>
                    </div>
                    <div className="d-flex align-middle">
                        <img className="me-3" src={ lixeira } alt="Deletar tarefa" />
                        <Link className="link-tag" to={`/update/${props.id}`}><img src={ edit } alt="Editar tarefa" /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ToDoCard