import React from 'react';
import PropTypes from 'prop-types'

 const Movie = ({movie}) => (
             <div>
                <h2>{movie.title}</h2>
            </div>
        
 )
export default Movie;
   Movie.propTypes = {
        movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
           }).isRequired,
    } 