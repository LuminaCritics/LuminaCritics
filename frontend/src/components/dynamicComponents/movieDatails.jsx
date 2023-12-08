export default function MovieDetails({movie}) {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={"https://image.tmdb.org/t/p/original" + movie.backdrop_path} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                <h1 className="text-5xl font-bold"> {movie.title} </h1>
                <p className="py-6"> {movie.overview} </p>
                <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
}