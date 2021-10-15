import { useState, useEffect } from 'react';

function TaskUpdate() {
    const [formData, setFormData] = useState({
        title: "",
        body: "",
        status: "active"
    });

    const { id } = useParams();
    useEffect(() => {
        axios
          .get(`http://localhost:3000/tasks/${id}`)
          .then((response) => {
            console.log(response);
            setFormData({ ...response.data });
          })
          .catch((err) => console.error(err));
      }, [id]);
    function handleChange(event) {
        setFormData({...formData, [event.target.name]: event.target.value});
    }
    

    function handleChange(event) {
        setFormData({...formData, [event.target.name]: event.target.value});
    }

    return(
        <div className="row">
            <div className="col-12 pb-1 pt-2">
                <form>
                    <label htmlFor="title"><h3 className="section-name">Nome da tarefa</h3></label>
                    <div className="mb-3">
                        <input required onChange={handleChange} value={formData.title} type="text" name="title" id="title" className="form-control" />
                    </div>
                    <label htmlFor="body"><h3 className="section-name">Detalhe da tarefa</h3></label>
                    <div className="mb-3">
                        <input required onChange={handleChange}  value={formData.body} name="body" id="body" className="form-control" />
                    </div>
                    <button type="submit" className="dark-button">Adicionar nova tarefa</button>
                </form>
            </div>
        </div>
    )
}

export default TaskUpdate