import {Link} from 'react-router-dom';
import lixeira from '../img/lixo.svg';
import edit from '../img/edit.svg';
import './to-do-card.css';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function ToDoCard(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handleDelete (){
        axios
        .delete(`http://localhost:3000/tasks/${props.id}`)
        .then(
            setShow(false)
        )
        .catch((err) => console.error(err));
    }
    function handleFinish(){
        const objeto = {
            id:props.id,
            title:props.title,
            body: props.body,
            unfinished: false,
            status: "inactive"
        }
        axios
        .put(`http://localhost:3000/tasks/${props.id}`, objeto)
        .then((response) => {
            console.log(response);
          
        })
        .catch((err) => console.error(err));
    }

    return (
        <>
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 pb-3" key={props.id}>
            <div className={props.class}>
                <div className="content">
                    <h3 className="to-do-card-title">{props.title}</h3>
                    <p>{props.body}</p>
                </div>
                <div className="d-flex justify-content-between align-middle">
                    <div>
                    <button className="dark-button" onClick={handleFinish}>Concluir</button>
                    </div>
                    <div className="d-flex align-middle">
                        <img className="me-3 lixeira" src={ lixeira } alt="Deletar tarefa" onClick={handleShow}/>
                        <Link className="link-tag" to={`/update/${props.id}`}><img src={ edit } alt="Editar tarefa" /></Link>
                    </div>
                </div>
            </div>
        </div>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Deletar tarefa?</Modal.Title>
            </Modal.Header>
            <Modal.Body>Depois de deletada será impossível recuperar a tarefa.</Modal.Body>
            <Modal.Footer>
            <Button variant="danger" onClick={handleDelete}>
                Deletar
            </Button>
            </Modal.Footer>
        </Modal>
      </>
    )
}

export default ToDoCard