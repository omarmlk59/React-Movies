import React from 'react'


const Card = ( {movie} ) => {

    const dateFormater = ( date ) => {
        let [yy, mm, dd] = date.split("-")
        return [dd,mm,yy].join("/")
    }

    const genreFinder = () => {
        let genreArray = [];
        for(let i=0; i<movie.genre_ids.length; i++){
            switch(movie.genre_ids[i]) {
                case 28:
                    genreArray.push(`Action`)
                    break;
                case 12:
                    genreArray.push(`Aventure`)
                    break;
                case 16:
                    genreArray.push(`Animation`)
                    break;
                case 35:
                    genreArray.push(`Comédie`)
                    break;
                case 80:
                    genreArray.push(`Crime`)
                    break;
                case 99:
                    genreArray.push(`Documentaire`)
                    break;
                case 18:
                    genreArray.push(`Drame`)
                    break;
                case 10751:
                    genreArray.push(`Familial`)
                    break;
                case 14:
                    genreArray.push(`Fantastique`)
                    break;
                case 36:
                    genreArray.push(`Histoire`)
                    break;
                case 27:
                    genreArray.push(`Horreur`)
                    break;
                case 10402:
                    genreArray.push(`Musique`)
                    break;
                default:
                    break;
            }
        }
        return genreArray.map((genre) => <li key={genre}>{genre}</li>)
    }

    const addStorage = () => {
        let storedData = window.localStorage.movies 
            ? window.localStorage.movies.split(",")
            : [];
        
        if (!storedData.includes(movie.id.toString())){
            storedData.push(movie.id);
            window.localStorage.movies = storedData;
        } 
    }


    const deleteStorage = () => {
        let storedData = window.localStorage.movies.split(",")

        let newData = storedData.filter((id) => id !== movie.id)

        window.localStorage.movies = newData
    }

  return ( 
    <div className='card'>
        <img src={movie.poster_path ? 
            "https://image.tmdb.org/t/p/w500" + movie.poster_path : "./img/poster.jpg"} alt="poster"
        />
        <h4>{movie.title}</h4>
        {movie.release_date ? ( <h5>Sorti le : {dateFormater(movie.release_date)}</h5>) : ("")}
        <h4>{movie.vote_average}/10<span>⭐</span></h4>
        <ul>{ movie.genre_ids 
            ? genreFinder()
            : movie.genres.map((genre, index) => <li key={index}>{genre.name}</li>) 
        }
        </ul>
        {movie.overview ? <h3>Synopsis</h3> : ""}
        <p>{movie.overview}</p>

        {movie.genre_ids ? (
            <div className="btn" onClick={() => addStorage()}> 
                Ajouter aux coups de coeur
            </div> ) : (
                <div className="btn" 
                     onClick={() => {
                         deleteStorage();
                         window.location.reload();
                    }}> 
                    Supprimer de la liste 
                </div>
            )}
    </div>
  )
}
 


export default Card;