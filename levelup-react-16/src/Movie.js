import React, { Component } from 'react';
import PropTypes from 'prop-types'
 class Movie extends Component {
     static propTypes = {
         movie: PropTypes.shape({
             title: PropTypes.string.isRequired,
            }),
     }
    
    render(){
        return(
            <div>
                <h2>{this.props.movie.title}</h2>
                <p>{this.props.desc}</p>
            </div>
        )
        }
}

export default Movie