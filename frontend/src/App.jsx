import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Privacy from "./pages/Privacy";
import About from "./pages/About";
import MovieDetails from "./pages/MovieDetails";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path = "/login" element = {<Login />}/>
        <Route path = "/contacts" element = {<Contacts />}/>
        <Route path = "/privacy" element = {<Privacy />}/>
        <Route path = "/about" element = {<About />}/>
        <Route path = "/viewMovie" element = {<MovieDetails />}/>
      </Routes>
    </BrowserRouter>
  )
}
