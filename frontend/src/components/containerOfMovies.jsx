export default function ContainerOfMovies ({movies , title}) {

    const formatdate = (date) => {
        const [year , month , day] = date.split ("-");
        return `${day}/${month}/${year}`;
    }
    
    const formatover = (overview) => {
        if (overview.length > 100) {
            return overview.slice (0, 100) + "...";
        }
        return overview;
    }

    return (
        <div className = "grid grid-cols-2 gap-2 md:grid-cols-4 z-10 pt-10">
            <p className = "w-full text-2xl text-center font-bold absolute"> {title} </p>
            {
                movies.map ((movies , key) => (
                    
                    <a href = {`/viewMovie?id=${movies.id}`} key = {key}>
                        <div className="card w- bg-base-100 shadow-xl flex mt-20 justify-center">
                            <figure ><img src = {"https://image.tmdb.org/t/p/original" + movies.poster_path} className = "hover:scale-125 transition duration-500 cursor-pointer" alt = {movies.title} width = "150px" height = "150px"/></figure>
                            <div className="card-body flex justify-start lg:justify-center items-start md:items-center">
                                <h2 className=" text-lg font-semibold lg:text-2xl">
                                    {movies.title}
                                </h2>
                                    <div className="badge badge-secondary"> {formatdate(movies.release_date)} </div>
                                <div className = "w-full h-11 overflow-hidden"> {formatover(movies.overview)} </div>
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