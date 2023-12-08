import Carousel from "../components/carousel";
import ContainerOfMovies from "../components/containerOfMovies";
import { useEffect, useState } from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import ListOfMovies from "../components/listOfMovies";
import MontarAxiosAPI from "../utils/axios";
export default function Home () {
    const Axios = MontarAxiosAPI()
    const [carousel, setCarousel] = useState ([]);
    const [container , setContainer] = useState ([]);
    const [firstList , setFirstList] = useState ([]);
    const [secondList , setSecondList] = useState ([]);
    const [thirdList , setThirdList] = useState ([]);
    const [fourtyList , setFourtyList] = useState ([]);

    useEffect (()=> {
        Axios.get("/filmes/trending")
        .then ((response) => {
            setCarousel (response.data);
        });

        Axios.get("/filmes/popular")
        .then ((response) => {
            setContainer (response.data);
        });

        Axios.get("/filmes/buscar/aventura")
        .then ((response) => {
            setFirstList (response.data);
        });

        Axios.get("/filmes/buscar/dragon")
        .then ((response) => {
            setSecondList (response.data);
        });

        Axios.get("/filmes/buscar/espaco")
        .then ((response) => {
            setThirdList (response.data);
        });

        Axios.get("/filmes/buscar/espiao")
        .then ((response) => {
            setFourtyList (response.data);
        });
    }, []);

    return (
        <DefaultLayout>
            <Carousel movies = {carousel} title = ""/>

            <ContainerOfMovies movies = {container} title = "Filmes Populares" />

            <div className = "flex-none justify-center items-center grid grid-cols-2 md:grid-cols-4 pt-20">
                <ListOfMovies movies = {firstList} title = "Aventura"/>
                <ListOfMovies movies = {secondList} title = "Ação"/>
                <ListOfMovies movies = {thirdList} title = "Espaço"/>
                <ListOfMovies movies = {fourtyList} title = "Espiões"/>
            </div>
        </DefaultLayout>
    );
  }
  