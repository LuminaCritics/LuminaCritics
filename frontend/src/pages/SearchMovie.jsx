import { useState, useEffect } from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import MontarAxiosAPI from "../utils/axios";
export default function SearchMovies () {

    const [movie, setMovie] = useState ([]);
    const Axios = MontarAxiosAPI()
    useEffect (() => {
        var url = window.location.href;
        var urlObj = new URL(url);
        var id = urlObj.searchParams.get("id");

        Axios.get (`/filmes/buscar/${id}`)
        .then ((response) => {
            setMovie (response.data);
            document.getElementById ("load").style.display="none";
        });
    }, []);
    return (
        <DefaultLayout>
            <span className="loading loading-infinity loading-lg w-96 h-96 m-auto m-0 mx-auto" id = "load"></span>
            <div className="overflow-x-auto mt-20">
                <table className="table">
                    <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Descriçao</th>
                        <th>Data de Lançamento</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                   {movie.map ((movie, key)=> (
                    
                        <tr key = {key}>
                            
                         <td>
                         <a href = {`/viewMovie?id=${movie.id}`}>
                         <div className="flex items-center gap-3">
                             <div className="avatar">
                             <div className="mask mask-squircle w-20 h-20">
                                 <img src={"https://image.tmdb.org/t/p/original" + movie.poster_path} alt="Avatar Tailwind CSS Component" />
                             </div>
                             </div>
                             <div>
                             <div className="font-bold"> {movie.name} </div>
                             </div>
                         </div>
                         </a>
                         </td>
                         <td>
                        {movie.overview}
                         </td>
                         <td> {movie.release_date} </td>
                     </tr>
                   ))}
                    </tbody>
                </table>
                </div>
        </DefaultLayout>
    );
}