import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./MovieDetails.css";

function MovieDetails() {
  const location = useLocation();
  const navigate = useNavigate();

  // Hardcoded movie object in case location.state is not available
  const defaultMovie = {
    title: "Thalapathi",
    director: "Mani Ratnam",
    genre: "Crime",
    views: "2.8M",
    favorites: 600,
    comments: "350",
    cover:
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a8c0c6121426763.60c5e43eaaace.jpg",
    description:
      "Thalapathi is a powerful crime drama directed by Mani Ratnam. The film follows the story of an orphan named Surya, who, with a violent and troubled past, forms an unlikely alliance with a powerful underworld don. As he rises through the ranks of the criminal world, Surya grapples with questions of loyalty, morality, and justice. The movie explores deep themes of friendship, betrayal, and the conflict between personal ethics and societal rules. With its intense performances and stunning cinematography, Thalapathi remains a classic in Indian cinema.",
    favorited: false,
    content: () => (
      <p>
        An orphan with a violent past forms an alliance with a powerful
        underworld don, leading to a series of events that challenge his
        morality and sense of justice.
      </p>
    ),
  };

  const { movie } = location.state || { movie: defaultMovie };

  return (
    <motion.div
      className="movie-details-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="movie-details-content">
        <motion.img
          src={movie.cover}
          alt={movie.title}
          className="movie-details-cover"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <div className="movie-details-info">
          <motion.h1
            className="movie-details-title"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {movie.title}
          </motion.h1>
          <motion.h2
            className="movie-details-director"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Directed by {movie.director}
          </motion.h2>
          <motion.p
            className="movie-details-description"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {movie.description}
          </motion.p>
          <motion.div
            className="movie-details-summary"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3>Summary</h3>
            <p>{movie.content()}</p>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="movie-details-description"
        style={{ marginLeft: "20px" }}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h3>Description</h3>
        <p>{movie.description}</p>
      </motion.div>
    </motion.div>
  );
}

export default MovieDetails;
