import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {

  return (
    <Router>
        <div className="container-fluid container-panel" id="container-panel">
          <Menu></Menu>
          <Content></Content>
          <Footer></Footer>
        </div>
  </Router>
  );
}

export default App;
