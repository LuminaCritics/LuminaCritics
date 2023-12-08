import DefaultLayout from "../layouts/DefaultLayout";

export default function Abaout () {
    return (
        <DefaultLayout>
            <div class="hero min-h-screen bg-base-200">
                <img src = "/astronaut.png" class = "absolute mt-80 mr-36" />
                <div class="hero-content text-center">
                <div class="max-w-md">
                    <h1 class="text-5xl font-bold"> Olá cosmonauta ! </h1>
                    <p class="py-6"> Somos a Lumina Critics, sua plataforma número 1 de avaliação de filmes, séries, desenhos e mais ! Aqui você encontra infomações sobre o conteúdo audiovisual desejado, até os mais distantes perdidos nos confins do espaço. </p>
                    <a href = "/"><button class="btn btn-primary"> Vamos Nessa </button></a>
                </div>
                </div>
            </div>
        </DefaultLayout>
    );
}