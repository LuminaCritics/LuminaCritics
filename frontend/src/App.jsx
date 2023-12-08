import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Privacy from "./pages/Privacy";
import About from "./pages/About";
import MovieDetails from "./pages/MovieDetails";
import SearchMovies from "./pages/SearchMovie";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path = "/login" element = {<Login />}/>
        <Route path = "/signup" element = {<SignUp />}/>
        <Route path = "/contacts" element = {<Contacts />}/>
        <Route path = "/privacy" element = {<Privacy />}/>
        <Route path = "/about" element = {<About />}/>
        <Route path = "/viewMovie" element = {<MovieDetails />}/>
        <Route path = "/search" element = {<SearchMovies />}/>
      </Routes>
    </BrowserRouter>
  )
}
