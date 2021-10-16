import { useState, useEffect } from 'react';
import axios from 'axios';
function UserInfo(props) {
    const [info, setInfo] = useState([])
    
    useEffect(() => {
        axios
            .get('https://ironrest.herokuapp.com/minhas-tarefas-user-info')
            .then((response) => {
            setInfo(...response.data)
        })
        .catch(err => console.error(err))
    }, [])

    return (
        <div className="col-auto me-auto pt-3">
            <div className="align-items-center d-flex">
                <div>
                    <span className="saudacao">Olá, {info.userName}</span><br />
                    <span className="ativ-pendentes">Você tem <strong>{props.quantity} tarefas</strong> pendentes</span>
                </div>
            </div>
        </div>
    )
}

export default UserInfo