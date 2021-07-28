import React, { useEffect, useState } from 'react'
import axios from "axios";
import MovieItem from './MovieItem';
import './Dashboard.css'

function Dashboard() {
    const [movies, setMovies] = useState([])
    console.log(process.env.REACT_APP_API_KEY)
    const generateUrl = query => {
        return `https://api.themoviedb.org/3/movie/${query}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
    }

    useEffect(() => {
        axios.get(generateUrl('top_rated')).then(res => setMovies(res.data))

    }, [])

    return (
        <div className="dashboard">
            <div className="search"><input placeholder="Search 🔍" type="text" /><button>Clear</button></div>
            {movies.results?.map(el =><MovieItem item={el}/>)}

        </div>
    )
}

export default Dashboard
