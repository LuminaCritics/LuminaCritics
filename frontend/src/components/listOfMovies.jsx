export default function ListOfMovies ({movies, title}) {

    return (
        <div className = "flex flex-col max-h-80 md:max-h-full overflow-hidden">
            <button className = "btn btn-ghost flex justify-center text-xl md:text-4xl font-bold pb-5"> {title} </button>
            <div className="h-96 carousel carousel-vertical rounded-box ml-7">
                {
                    movies.map ((movies , key) => (
                       <a key = {key} href = {`/viewMovie?id=${movies.id}`} ><img  src = {"https://image.tmdb.org/t/p/original" + movies.poster_path} className = "carousel-item" width = "300px" height = "300px" /></a>
                    ))
                }
            </div>
        </div>
    );
}