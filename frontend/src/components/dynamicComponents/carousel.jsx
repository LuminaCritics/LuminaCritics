export default function Carousel ({movies, title}) {
    return (
        <div class = "w-full h-96 pt-20">
            <p class = "w-full uppercase text-2xl text-center underline decoration-blue-500 font-bold absolute"> {title} </p>
            <div class="carousel rounded-box w-full pt-10 absolute">
                {
                    movies.map ((movies , key) => (
                        <div class="carousel-item" key = {key} >
                            <img src = {movies.image} width = "150px" height = "150px" alt = {movies.id} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}