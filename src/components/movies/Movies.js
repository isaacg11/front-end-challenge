import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './movies.css'

// @params {Array} movies

class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDate: "2019-03-12T15:07:47-07:00"
        }
        this.createButton = this.createButton.bind(this);
        this.handleReturnButton = this.handleReturnButton.bind(this);
    }

    createButton(movieIndex) {
        return (
            <Button 
                className="movie-button" 
                onClick={() => this.handleReturnButton(movieIndex)}>
                Return
            </Button>
        )
    }

    createTag(movie) {
        let currentDate = new Date(this.state.currentDate)
        let checkedOutDate = new Date(movie.checkedOut)
        let differenceInTime = checkedOutDate.getTime() - currentDate.getTime();
        let differenceInDays = differenceInTime / (1000 * 3600 * 24); 
        if(differenceInDays <= -6) {
            return (
                <div className="overdue-tag">OVERDUE</div>
            )
        }
    }

    handleReturnButton(movieIndex) {
        console.log('handleReturnButton, movieIndex: ', movieIndex)
    }

    render() {

        let { movies } = this.props;

        return (
            <div>
                <div className="movies">
                    {movies.map((movie, index) => (
                    <div className="movie" key={index}>
                        {this.createTag(movie)}
                        <span>
                            {movie.Title} <span id="year">({movie.Year})</span>
                            <div className="movie-image-container">
                                <img 
                                    src={movie.Poster} 
                                    className="movie-image"
                                    alt="movie poster" 
                                />
                            </div>
                        </span>
                        <div className="movie-button-container">
                            {this.createButton(index)}
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Movies;