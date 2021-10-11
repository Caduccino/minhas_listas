function UserInfo() {
    return (
        <div className="col-auto me-auto pt-3">
            <div className="align-items-center d-flex">
                <div className="user-picture"></div>
                <div className="mx-2">
                    <span className="saudacao">Olá, Fulano!</span><br />
                    <span className="ativ-pendentes">Você tem <strong>4 tarefas</strong> pendentes</span>
                </div>
            </div>
        </div>
    )
}

export default UserInfo