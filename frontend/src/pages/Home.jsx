import Carousel from "../components/carousel";
import ContainerOfMovies from "../components/containerOfMovies";
import { useEffect, useState } from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import ListOfMovies from "../components/listOfMovies";
import MontarAxiosAPI from "../utils/axios";
import Card from '../components/Card';
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
            <div className="flex justify-center items-center mt-[250px]">
            <div className="w-full max-w-screen-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                <Card
                title="Uma Comunidade Viva!"
                content="Participe de nossa comunidade ativa de amantes de filmes. Troque opiniões, recomendações e descubra novos filmes emocionantes."
                />
                <Card
                title="Você no Controle."
                content="Avalie e compartilhe suas opiniões sobre os filmes que você assistiu. Seja parte ativa da comunidade Lumina Critics."
                />
                <Card
                title="Uma Nova Forma de Avaliar."
                content="Adotamos uma abordagem inovadora para avaliar filmes. Deixe de lado as classificações tradicionais e explore uma nova perspectiva em Lumina Critics."
                />
                <Card
                title="Compartilhe!"
                content="Compartilhe suas descobertas cinematográficas, recomende seus filmes favoritos e descubra o que outros membros estão assistindo."
                />
            </div>
            </div>
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
  