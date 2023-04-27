import React from "react";
import moment from "moment/moment";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";
import styles from "./MovieList.module.css";

const MovieItem = ({ movieItem }) => {
  console.log("=====movitem=====", movieItem);
  const {
    poster,
    title,
    genre,
    director,
    totalVoted,
    stars,
    language,
    pageViews,
    releasedDate,
  } = movieItem;
  return (
    <>
      <div className={styles.movieItem}>
        <div className={styles.movieContent}>
          <div className={styles.movieVote}>
            <div className={styles.voteCountConatiner}>
              <div>
                <BiUpArrow />
              </div>
              <div className={styles.voteCount}>{totalVoted}</div>
              <div>
                <BiDownArrow />
              </div>
            </div>
            Votes
          </div>
          <div className={styles.moviePoster}>
            <img src={poster} alt="Movie Poster" />
          </div>
          <div className={styles.movieDetails}>
            <p className={styles.movieTitle}>{title}</p>
            <p>Genre : {genre}</p>
            <p>Director: {director}</p>
            <p className={styles.starring }>Starring: {stars.join(",")}</p>
            <p>
              <span>{language} | </span>
              <span>{moment(releasedDate).format("DD, MMM")}</span>
            </p>
            <p className={styles.votingDetails}>
              <span>{pageViews} Views | </span>
              <span>Voted by {totalVoted} people</span>
            </p>
          </div>
        </div>
        <div className={styles.btn}>
          <button>Watch Trailer</button>
        </div>
      </div>
    </>
  );
};

export default MovieItem;
