export default function ContainerOfMovies ({movies , title}) {

    return (
        <div className = "grid grid-cols-2 gap-2 md:grid-cols-4 z-10 pt-52">
            <p className = "w-full uppercase text-2xl text-center underline decoration-blue-500 font-bold absolute"> {title} </p>
            {
                movies.map ((movies , key) => (
                    
                    <a href = {`/viewMovie?id=${movies.id}`} key = {key}>
                        <div className="card w- bg-base-100 shadow-xl flex mt-20 justify-center">
                            <figure ><img src = {"https://image.tmdb.org/t/p/original" + movies.poster_path} className = "hover:scale-125 transition duration-500 cursor-pointer" alt = {movies.title} width = "150px" height = "150px"/></figure>
                            <div className="card-body flex justify-center items-center">
                                <h2 className="card-title">
                                    {movies.title}
                                    <div className="badge badge-secondary"> {movies.release_date} </div>
                                </h2>
                                <div class = "w-full h-11 overflow-hidden"> {movies.overview} </div>
                                <div className="card-actions justify-end">
                                </div>
                            </div>
                        </div>
                    </a>
                ))
            }
        </div>
    );
}