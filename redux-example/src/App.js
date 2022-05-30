import logo from './logo.svg';
import './App.css';
import { Routes,Route, Link
  } from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
import ModalComponent from './components/ModalComponent';
import Home from './components/Home';
import ForgotPassword from './components/ForgotPassword';
function App() {
  return (
    <div className="App">
      <header className="App-header">

      <Routes>
    <Route path="/login" element={<Login/>}></Route>
   <Route path="/" element={<Signup/>}></Route>
    <Route path="home" element={<Home/>}></Route>
    <Route path="modal" element={<ModalComponent/>}></Route>
    <Route path="reset" element={<ForgotPassword/>}></Route>


    </Routes>
    {/* <h1>Hiiii</h1> */}
      </header>
    </div>
  );
}

export default App;
