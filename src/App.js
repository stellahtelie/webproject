import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from "./components/Navbar"
import './App.css';
import Home from "./components/Home"
import Content from "./components/Content"
import Login from "./components/Login"
function App() {
  return (
    <Router>
    <div className="App">
    <Navbar/>
    <Switch>
    <Route path="/content">
    <Content/>
    </Route>
    
    <Route path="/login">

    <Login/>
    </Route>
    <Route path="/">
    
    <Home/>
    </Route>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
