import './App.css';

import Header from './Components/Header/Header';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
