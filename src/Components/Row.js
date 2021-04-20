import React, { useState } from 'react';
import './Row.css';

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
    
    const [movies, setMovies] = useState([]);

    

    return (
        <div className="row">
            <h2>{title}</h2>
        </div>
    )
}

export default Row;
