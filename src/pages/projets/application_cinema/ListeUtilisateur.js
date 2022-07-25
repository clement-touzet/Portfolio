import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Card from "../../../components/projets/application_cinema/Card";
import HeaderCinema from "../../../components/projets/application_cinema/HeaderCinema";

const ListeUtilisateur = () => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    let moviesId = window.localStorage.movies
      ? window.localStorage.movies.split(",")
      : [];

    for (let i = 0; i < moviesId.length; i++) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=06058015830edcace5e43f6eacdfeddf&language=fr-FR`
        )
        .then((res) => {
          // j'ajoute à listData les données du film de la boucle
          setListData((listData) => [...listData, res.data]);
        });
    }
  }, []);

  return (
    <div className="bodyAppCinema">
      <div className="user-list-page">
        <HeaderCinema />
        <h2>
          Coups de coeur<span>💖</span>
        </h2>
        <div className="result">
          {listData.length > 0 ? (
            listData.map((movie) => <Card movie={movie} key={movie.id} />)
          ) : (
            <h2>Aucun coup de coeur pour le moment</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListeUtilisateur;
