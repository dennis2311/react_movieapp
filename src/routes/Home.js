import React from "react";
// import propTypes from "prop-types";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component {
  state = {
    //changable data
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    //getMovies wait for axios
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json&sort_by=rating"
    );
    this.setState({ movies: movies, isLoading: false });
  };

  componentDidMount() {
    //executed when components finished loading
    this.getMovies();
  }

  render() {
    //react automatically execute render method
    const { isLoading, movies } = this.state;

    return (
      <section class="container">
        {isLoading ? (
          <div class="loader">
            <span class="loader__text">Loading...</span>
          </div>
        ) : (
          <div class="movies">
            {movies.map((movie) => (
              <Movie
                id={movie.id}
                title={movie.title}
                year={movie.year}
                summary={movie.summary}
                poster={movie.poster}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default Home;
