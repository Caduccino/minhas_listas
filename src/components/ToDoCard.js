import { Modal } from 'react-bootstrap';
import { useState } from 'react';
import lixeira from '../img/lixo.svg'
import edit from '../img/edit.svg'
import './to-do-card.css'

function ToDoCard(props) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 pb-3" key={props.id}>
            <div className="to-do-card">
                <h3 className="to-do-card-title">{props.title}</h3>
                <p>{props.body}</p>
                <button className="dark-button" onClick={handleShow}>Mais informações</button>
                <div className="form-check card-form pt-3">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                    Marcar como concluída
                    </label>
                </div>
            </div>
        </div>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{props.body}</Modal.Body>
            <Modal.Footer>
                <div className="form-check card-form">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" for="flexCheckDefault">
                    Marcar como concluída
                    </label>
                </div>
                <div className="d-flex">
                    <div className="px-3">
                        <img src={ lixeira } alt="Deletar tarefa" />
                    </div>
                    <div>
                        <img src={ edit } alt="Editar tarefa" />
                    </div>
                </div>
            </Modal.Footer>
        </Modal>
    </>
    )
}

export default ToDoCard