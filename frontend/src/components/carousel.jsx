export default function Carousel ({movies, title}) {
    return (
        <div className = "w-full h-96 pt-20">
            <p className = "w-full uppercase text-2xl text-center font-bold absolute"> {title} </p>
            <div className="carousel rounded-box w-full pt-10 absolute">
                {
                    movies.map ((movies , key) => (
                        <div className="carousel-item" key = {key} >
                            <a href = {`/viewMovie?id=${movies.id}`}>
                            <img src = {"https://image.tmdb.org/t/p/original" + movies.poster_path} width = "300px" height = "300px" alt = {movies.id} />
                        
                        </a>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}