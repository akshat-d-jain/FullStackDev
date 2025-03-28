import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Home from "./pages/Home"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact Component={Home}/>
          <Route path="/login" Component={Login}/>
          <Route path="/signup" Component={Signup}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
