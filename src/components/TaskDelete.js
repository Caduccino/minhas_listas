import { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

function TaskDelete() {
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    axios
      .delete(`https://ironrest.herokuapp.com/minhas-tarefas/${id}`)
      .then(() => history.push("/"))
      .catch((err) => console.error(err));
  }, [history, id]);

  return <div>Deleting...</div>;
}

export default TaskDelete;