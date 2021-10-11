import { useState } from 'react';

function Form() {
    const [formData, setFormData] = useState({
        title: "",
        body: ""
    });
    const handleSubmit = (e) => {
        e.preventDefault()
    };
    return (
        <div className="row">
            <div className="col-12 pb-1 pt-2">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title"><h3 className="section-name">Qual é a sua nova tarefa?</h3></label>
                    <div className="mb-3">
                        <input onChange={(e) => setFormData({...formData, title: e.target.value})} value={formData.title} type="text" name="title" id="title" className="form-control" />
                    </div>
                    <label htmlFor="body"><h3 className="section-name">Detalhe a sua tarefa</h3></label>
                    <div className="mb-3">
                        <input onChange={(e) => setFormData({...formData, body: e.target.value})}  value={formData.body} name="body" id="body" className="form-control" />
                    </div>
                    <button type="submit" className="dark-button">Adicionar nova tarefa</button>
                </form>
            </div>
        </div>
    )
}

export default Form