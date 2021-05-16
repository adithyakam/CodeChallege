import './App.css';
import Content from './Components/Content/Content';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductAndServices from './Components/ProdectAndServices/ProductAndServices';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/" component={Home}/>
        </Switch>
      </Router>
     
     
      <div className="App__copyrigth">
        <h6>Copyright © 2021- - Orizon Technologies Ltd</h6>
      </div>
    </div>
  );
}

export default App;
