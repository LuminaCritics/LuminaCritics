import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import MontarAxiosAPI from "../utils/axios";
function ViewMovie() {
  const [movie, setMovie] = useState();
  const [comments, setComments] = useState([]); // Estado para armazenar comentários
  const [newComment, setNewComment] = useState(""); // Estado para armazenar o novo comentário
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const movieId = queryParams.get("id");
  const Axios = MontarAxiosAPI()
  useEffect(() => {
    // Lógica de busca de dados
    Axios
      .get(`/filmes/${movieId}/details`)
      .then((res) => {
        console.log(res.data);
        setMovie(res.data);
        console.log(movie);
      });
    const cookie = Cookies.get("userToken"); // Obtém o cookie do armazenamento

    Axios
      .get(
        `/avaliar/item/${movieId}/avaliacoes`,
        {
          headers: {
            'Authorization': `Bearer ${JSON.parse(cookie).userToken}`, // Configura o cookie no cabeçalho
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setMovie(res.data);
        console.log(movie);
      });
      Axios
      .get(
        `/comentario/all/${movieId}`,
        {
          headers: {
            'Authorization': `Bearer ${JSON.parse(cookie).userToken}`, // Configura o cookie no cabeçalho
          },
        }
      )
      .then((res) => {
        console.log(res.data);
      });
  }, []);

  //   console.log(movie);

  const handleCommentSubmit = () => {
    // Adicionar lógica para enviar o novo comentário ao servidor
    // E atualizar a lista de comentários
    setComments([...comments, newComment]);
    setNewComment("");
  };

  if (!movie) {
    return <div className="text-center text-white">Carregando...</div>;
  }

  return (
    <div className="bg-black min-h-screen p-10">
      <div className="w-full h-full mx-auto flex flex-row ">
        <img
          className="w-full h-auto rounded-lg shadow-lg mb-6 mr-10"
          src={`https://image.tmdb.org/t/p/h500${movie.backdrop_path.split(
            "https://image.tmdb.org/t/p/w500/,"
          )}`}
          alt={movie.title}
        />
        <div>
          <h2 className="text-4xl font-bold text-white mb-3">{movie.title}</h2>
          <div className="mb-5">
            {movie.genres.map((genre, index) => (
              <span
                className="text-black mr-2 bg-white p-1 rounded"
                key={index}
              >
                {genre.name}
              </span>
            ))}
          </div>

          <p className="text-gray-400 mb-4">{movie.release_date}</p>
          <p className="text-white text-lg">{movie.overview}</p>
          <div className="mt-6">
            <h3 className="text-2xl text-white mb-3">Comentários</h3>
            <textarea
              className="w-full p-2 mb-2 text-white"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Adicione um comentário..."
            />
            <button
              onClick={handleCommentSubmit}
              className="bg-red-500 text-white px-4 py-2 rounded mb-10"
            >
              Enviar
            </button>
            {comments.map((comment, index) => (
              <div className="flex flex-row" key={index}>
                <p className="text-yellow-200 mr-2">Nome do cara: </p>
                <div key={index} className="text-white mb-2">
                  {comment}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewMovie;
