import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path = "/login" element = {<Login />}/>
        <Route path = "/signup" element = {<SignUp />}/>
        <Route path = "/contacts" element = {<Contacts />}/>
      </Routes>
    </BrowserRouter>
  )
}
