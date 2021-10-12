import {BrowserRouter, Route} from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header';
import Home from './Home'
import Form from './Form';

function App() {
  return (
    <div className="container">
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={ Home } />
      <Route path="/add" component={ Form } />
    </BrowserRouter>
    </div>
  );
}

export default App;
