import { Modal } from 'react-bootstrap';
import { useState } from 'react';
import lixeira from '../img/lixo.svg'
import edit from '../img/edit.svg'

import './to-do-card.css'

function ToDoCard() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 pb-3">
            <div className="to-do-card">
                <h3 className="to-do-card-title">Passear com os cachorros</h3>
                <p>Bla bla bla  bla  bla  bla  bla  bla  bla  bla  bla bla bla bla bla bla bla bla bla bla bla…</p>
                <button className="dark-button" onClick={handleShow}>Mais informações</button>
                <div class="form-check card-form pt-3">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" for="flexCheckDefault">
                    Marcar como concluída
                    </label>
                </div>
            </div>
        </div>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
                <div class="form-check card-form">
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