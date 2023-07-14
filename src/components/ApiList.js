import React from 'react';
import ApiShow from "./ApiShow";


const ApiList = ({ movie }) => {
    const cardComponent = movie.map((user, i) => {
        return <ApiShow key={i}
            Title={movie[i].Title}
            Year={movie[i].Year}
            imdbID={movie[i].imdbID}
        />
    })
    return (
        <div>
            {cardComponent}
        </div>
    );
}

export default ApiList
