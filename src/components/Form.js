import React from 'react'
import { useEffect , useState } from 'react'
import axios from 'axios'
import Card from './Card'



const Form = () => {

    const [moviesData, setMoviesData] = useState([]);
    const [search, setSearch] = useState("code");
    const [sortGoodToBad , setSortGoodToBad] = useState("goodToBad");

    useEffect(() => {
      axios
       .get(`https://api.themoviedb.org/3/search/movie?api_key=b7985c1b179a40fcc498bac69414a35b&query=${search}&language=fr-FR`)
       .then((res) => setMoviesData(res.data.results) 
    ,[search])
   })
    
  return (
    <div className='form-component'>
        <div className='form-container'>
            <form>
                <input 
                    type="text"
                    placeholder="Enter the title"
                    id="search-input"
                    onChange={(e) => setSearch(e.target.value)}
                />
                <input type="submit" value="Search"/>
            </form>
            <div className='btn-sort-container'>
                <div className='btn-sort' id='goodToBad' onClick={() => setSortGoodToBad("goodToBad")}>Top<span>🠢</span></div>
                <div className='btn-sort' id='badToGood' onClick={() => setSortGoodToBad("badToGood")}>Flop<span>🠢</span></div>
            </div>
        </div>
        <div className='result'>
            {moviesData
                .slice(0,20)
                .sort((a,b) => {
                        if(sortGoodToBad === "goodToBad"){
                            return b.vote_average - a.vote_average
                        } else if(sortGoodToBad === "badToGood"){
                            return a.vote_average - b.vote_average
                        }
                        return null
                    })
                .map((movie) => ( <Card key={movie.id} movie={movie} /> ) )}
        </div>
    </div>
  )
}




export default Form;