export default function ListOfMovies ({movies, title}) {

    return (
        <div className = "flex flex-col ">
            <button className = "btn btn-ghost flex justify-center text-xl md:text-4xl uppercase underline decoration-blue-500 font-bold pb-5"> {title} </button>
            <div className="h-96 carousel carousel-vertical rounded-box ml-7">
                {
                    movies.map ((movies , key) => (
                       <a href = "#"><img key = {key} src = {movies.image} className = "carousel-item" width = "300px" height = "300px" /></a>
                    ))
                }
            </div>
        </div>
    );
}