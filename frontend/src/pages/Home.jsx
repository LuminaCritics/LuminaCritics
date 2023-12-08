import Carousel from "../components/carousel";
import ContainerOfMovies from "../components/containerOfMovies";
import { useEffect, useState } from "react";
import Axios from "axios";
import DefaultLayout from "../layouts/DefaultLayout";
import ListOfMovies from "../components/listOfMovies";

export default function Home () {

    const [carousel, setCarousel] = useState ([]);
    const [container , setContainer] = useState ([]);
    const [firstList , setFirstList] = useState ([]);
    const [secondList , setSecondList] = useState ([]);
    const [thirdList , setThirdList] = useState ([]);
    const [fourtyList , setFourtyList] = useState ([]);

    useEffect (()=> {
        Axios.get("https://backend-31dy.onrender.com/luminacritics/filmes/trending")
        .then ((response) => {
            setCarousel (response.data);
        });

        Axios.get("https://backend-31dy.onrender.com/luminacritics/filmes/popular")
        .then ((response) => {
            setContainer (response.data);
        });

        Axios.get("https://backend-31dy.onrender.com/luminacritics/filmes/buscar/aventura")
        .then ((response) => {
            setFirstList (response.data);
        });

        Axios.get("https://backend-31dy.onrender.com/luminacritics/filmes/buscar/dragon")
        .then ((response) => {
            setSecondList (response.data);
        });

        Axios.get("https://backend-31dy.onrender.com/luminacritics/filmes/buscar/espaco")
        .then ((response) => {
            setThirdList (response.data);
        });

        Axios.get("https://backend-31dy.onrender.com/luminacritics/filmes/buscar/espiao")
        .then ((response) => {
            setFourtyList (response.data);
        });
    }, []);

    return (
        <DefaultLayout>
            <Carousel movies = {carousel} title = "Carousel"/>

            <ContainerOfMovies movies = {container} title = "Filmes Populares" />

            <div class = "grid grid-cols-2 md:grid-cols-4 pt-20">
                <ListOfMovies movies = {firstList} title = "Aventura"/>
                <ListOfMovies movies = {secondList} title = "Ação"/>
                <ListOfMovies movies = {thirdList} title = "No Espaço"/>
                <ListOfMovies movies = {fourtyList} title = "Espiões"/>
            </div>
        </DefaultLayout>
    );
  }
  