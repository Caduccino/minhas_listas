import {BrowserRouter, Route} from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header';
import Home from './Home'
import Form from './Form';
import TaskUpdate from './TaskUpdate';

function App() {
  return (
    <div className="container">
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={ Home } />
      <Route path="/add" component={ Form } />
      <Route path="/update/:id" component={ TaskUpdate } />
    </BrowserRouter>
    </div>
  );
}

export default App;
