import React, { useEffect, useState } from 'react'
import axios from "axios";
import MovieItem from './MovieItem';

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
            {movies.results?.map(el =><MovieItem item={el}/>)}

        </div>
    )
}

export default Dashboard
