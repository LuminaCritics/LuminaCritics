import DefaultLayout from "../layouts/DefaultLayout";
import {useEffect, useState} from "react";
import MontarAxiosAPI from "../utils/axios";
export default function MovieDetails () {
    const Axios = MontarAxiosAPI()
    const [movie, setMovie] = useState ({});
    const [genres, setGenres] = useState ([]);
    const [stars, setStars] = useState (0);
    const [comments, setComments] = useState ([]);
    const star = <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />

    useEffect (() => {
        var url = window.location.href;
        var urlObj = new URL(url);
        var id = urlObj.searchParams.get("id");

        Axios.get (`/filmes/${id}/details`)
        .then ((response) => {
            setMovie (response.data);
            setGenres (response.data.genres);
            let i = response.data.popularity;
            i = i * 0.005;
            i = Math.trunc (i);
            setStars (i);
        });
    }, []);

     return (
        <DefaultLayout>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={movie.backdrop_path} className="w-3/6 h-full rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold"> {movie.title} </h1>
      <p className="py-6"> {movie.overview} </p>
      {genres.map ((genres, key)=> (
        <p className="btn btn-primary mx-2" key = {key}> {genres.name} </p>
      ))}
      <div className="rating">
      {[...Array(stars)].map((_, index) => (
        <div key={index}>{star}</div>
      ))}
    </div>
    <form>
        <input type="text" placeholder=" Seu Comentário" className="input input-bordered w-full max-w-xs mt-14" />
        <input type="submit" value = "Comentar" className="btn btn-success w-full max-w-xs mx-2" />
    </form>
    </div>
  </div>
</div>
        </DefaultLayout>
     );
}
