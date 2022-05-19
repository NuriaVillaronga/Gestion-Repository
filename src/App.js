import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Menu from './components/Menu';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
        <div className="container-fluid container-panel">
          <Menu></Menu>
          <Content></Content>
          <footer>Hola</footer>
      </div>
  </Router>
  );
}

export default App;
