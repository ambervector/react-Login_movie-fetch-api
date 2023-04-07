import React, { Fragment, useEffect, useState } from "react";
import classes from "./ErrorPage.module.css";
import styles from "./FinalPage.module.css";
import MainNavigation from "../components/UI/MainNavigation";
import MovieItem from "../components/MovieList";
// import MovieList from "../components/MovieList";

const FinalPage = () => {
  const initialState = {
    loading: false,
    movieList: [],
  };
  const [{ loading, movieList }, setMovieList] = useState(initialState);

  useEffect(() => {
    const postData = async () => {
      const jsonData = {
        category: "movies",
        language: "kannada",
        genre: "all",
        sort: "voting",
      };

      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "cors",
        body: JSON.stringify(jsonData),
      };

      setMovieList((prevState) => ({ ...prevState, loading: true }));
      try {
        const response = await fetch(
          "https://hoblist.com/api/movieList",
          requestOptions
        );
        const data = await response.json();
        setMovieList((prevState) => ({ ...prevState, movieList: data.result }));
      } catch (error) {
        console.log(error);
      } finally {
        setMovieList((prevState) => ({ ...prevState, loading: false }));
      }
    };
    postData();
  }, []);

  const authStat = localStorage.getItem("IS_AUTHENTICATED");

  return (
    <>
      {authStat && <MainNavigation />}
      <div className={classes.ci_link}> </div>
      {loading ? (
        <div>Loading.....</div>
      ) : (
        <Fragment>
          {movieList.length > 0 ? (
            <div className={styles.movieListContainer}>
              {movieList.map((movie, index) => (
                <MovieItem key={index} movieItem={movie} />
              ))}
            </div>
          ) : (
            <div>No movies found</div>
          )}
        </Fragment>
      )}
    </>
  );
};

export default FinalPage;
