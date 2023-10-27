export default function ContainerOfMovies ({movies}) {

    return (
        <div className = "grid grid-cols-2 gap-2 md:grid-cols-4 z-10 pt-52">
            <p className = "w-full uppercase text-2xl text-center underline decoration-blue-500 font-bold absolute"> Filmes, Séries e mais </p>
            {
                movies.map ((movies , key) => (
                    <a href = "http://localhost:4321/viewMovie" key = {key}>
                        <div className="card w- bg-base-100 shadow-xl flex mt-20">
                            <figure ><img src = {movies.image} alt = {movies.title} width = "150px" height = "150px"/></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {movies.title}
                                    <div className="badge badge-secondary"> {movies.releaseDate} </div>
                                </h2>
                                <div className="card-actions justify-end">
                                    <div className="badge badge-outline"> {movies.id} </div> 
                                    <div className="badge badge-outline"> {movies.subOrDub} </div>
                                </div>
                            </div>
                        </div>
                    </a>
                ))
            }
        </div>
    );
}