import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header';
import MyTasks from './MyTasks';

function App() {
  return (
    <div className="container">
      <Header />
      <MyTasks />
    </div>
  );
}

export default App;
