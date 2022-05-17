import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Content from './components/Content';

function App() {
  return (
    <Router>
        <div className="container-fluid container-panel">
          <Header></Header>
          <Content></Content>
      </div>
  </Router>
  );
}

export default App;
