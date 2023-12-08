import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div style={{ position: 'relative' }}>
      <Header />
      <div className="content" style={{ zIndex: -1, position: 'relative' }}>
        <div class="hero min-h-screen bg-base-200">
          <img src="src/public/astronaut.png" class="absolute mt-80 mr-36" />
          <div class="hero-content text-center">
            <div class="max-w-md">
              <h1 class="text-5xl font-bold"> Olá cosmonauta ! </h1>
              <p class="py-6"> Somos a Lumina Critics, sua plataforma número 1 de avaliação de filmes, séries, desenhos e mais ! Aqui você encontra informações sobre o conteúdo audiovisual desejado, até os mais distantes perdidos nos confins do espaço. </p>
              <a href="/"><button class="btn btn-primary"> Vamos Nessa </button></a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

