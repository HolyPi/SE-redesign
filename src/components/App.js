import './App.css';
import Header from './Header/Header';
import Store from './Store/Store';
import Sqhl from './Sq-hl/Sq-hl';
import Footer from './Footer/Footer';
import Navbar2 from './Navbar2/Navbar2';
import Navbar from './Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar2 />
      <Navbar />
      <Header/>

    </div>
    </Router>
  );
}

export default App;
