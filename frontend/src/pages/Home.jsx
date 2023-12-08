import Carousel from "../components/carousel";
import ContainerOfMovies from "../components/containerOfMovies";
import { useEffect, useState } from "react";
import Axios from "axios";
import DefaultLayout from "../layouts/DefaultLayout";

export default function Home () {

    const [carousel, setCarousel] = useState ([]);
    const [container , setContainer] = useState ([]);

    useEffect (()=> {
        Axios.get("http://localhost:5000/luminacritics/filmes/trending")
        .then ((response) => {
            setCarousel (response.data);
        });

        Axios.get("http://localhost:5000/luminacritics/filmes/popular")
        .then ((response) => {
            setContainer (response.data);
        });
    }, []);

    return (
        <DefaultLayout>
            <Carousel movies = {carousel} title = "Carousel"/>

            <ContainerOfMovies movies = {container} title = "Filmes Populares" />
        </DefaultLayout>
    );
  }
  