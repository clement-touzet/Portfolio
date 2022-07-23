import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Form = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [search, setSearch] = useState("player");
  const [sortGoodBad, setSortGoodBad] = useState("badToGood");

  // pour rappel useEffet = joue le composant qu'une seule fois (sauf avec le callback)
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=06058015830edcace5e43f6eacdfeddf&query=${search}&language=fr-FR`
      )
      .then((reponse) => setMoviesData(reponse.data.results));
  }, [search]);

  return (
    <div className="form-component">
      <div className="form-container">
        <form action="">
          <input
            type="text"
            placeholder="Entrez le titre d'un film"
            id="search-input"
            onChange={(e) => setSearch(e.target.value)}
          />
          <input type="submit" value="Rechercher" />
        </form>
        <div className="btn-sort-container">
          <div
            className="btn-sort"
            id="goodToBad"
            onClick={() => setSortGoodBad("goodToBad")}
          >
            Top <span>➜</span>
          </div>
          <div
            className="btn-sort"
            id="badToGood"
            onClick={() => setSortGoodBad("badToGood")}
          >
            Flop <span>➜</span>
          </div>
        </div>
      </div>
      <div className="result">
        {moviesData
          .slice(0, 12)
          // a le plus petit b le plus grand
          .sort((a, b) => {
            if (sortGoodBad === "goodToBad") {
              return b.vote_average - a.vote_average; // du plus grand au plus petit
            } else if (sortGoodBad === "badToGood") {
              return a.vote_average - b.vote_average; // du plus petit au plus grand
            }
          })
          .map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
      </div>
    </div>
  );
};

export default Form;
