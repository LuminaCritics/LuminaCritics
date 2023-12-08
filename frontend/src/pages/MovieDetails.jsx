import DefaultLayout from "../layouts/DefaultLayout";
import {useEffect, useState} from "react";
import Cookies from "js-cookie";
import swal from 'sweetalert';
import MontarAxiosAPI from "../utils/axios";

export default function MovieDetails () {
    const Axios = MontarAxiosAPI();
    const [movie, setMovie] = useState ({});
    const [genres, setGenres] = useState ([]);
    const [comments, setComments] = useState()
    //const [stars, setStars] = useState (0);
    //const [comments, setComments] = useState ([]);
    const star = <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
    //const [rating, setRating] = useState([]);
    const [ratingValue, setRatingValue] = useState (0);

    useEffect (() => {
        var url = window.location.href;
        var urlObj = new URL(url);
        var id = urlObj.searchParams.get("id");

        Axios.get (`/filmes/${id}/details`)
        .then ((response) => {
            setMovie (response.data);
            setGenres (response.data.genres);
        });

        Axios.get (`/avaliar/item/${id}/avaliacoes`)
        .then ((response) => {
            if (response.data.length === 0) {
                setRatingValue(1);
            } else {
              let ratingValue = 0;
            for (let i = 0; i < response.data.length; i++) {
              
              ratingValue += response.data[i].rating;
            }
            setRatingValue (Math.trunc(ratingValue / response.data.length));
          }
        });
      
        
    }, []);

    function Rating (e) {
      e.preventDefault();
      let user = Cookies.get ('userToken');
      user = JSON.parse (user);
      var url = window.location.href;
        var urlObj = new URL(url);
        var id = urlObj.searchParams.get("id");

      let i = document.querySelector('input[type="number"]').value;

      Axios.request({
        headers: {
          Authorization: `Bearer ${user.token}`
        },
        method: "POST",
        url: `/avaliar/${user.user.id}/item/${id}/${i}`
      }).then(()=> {
        swal({
          title: "Sucesso!",
          text: "Avaliado !",
          icon: "success",
          button: "Ok!",
        }).then (()=> {
          window.location.reload();
        })
      });
    }

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
      {[...Array(ratingValue)].map((_, index) => (
        <div key={index}>{star}</div>
      ))}
    </div>
    <form method="post" onSubmit={Rating}>
        <input type="number" max={5} min={1} placeholder="Sua Avaliação" className="input input-bordered w-20 max-w-xs mt-14" />
        <input type="submit" value = "Avaliar" className="btn btn-success w-full max-w-xs mx-2" />
    </form>
  
    </div>
  </div>
</div>
        </DefaultLayout>
     );
}