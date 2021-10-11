import {BrowserRouter, Route} from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header';
import MyTasks from './MyTasks';
import Form from './Form';

function App() {
  return (
    <div className="container">
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={ MyTasks } />
      <Route path="/add" component={ Form } />
    </BrowserRouter>
    </div>
  );
}

export default App;
