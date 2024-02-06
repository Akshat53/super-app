import React, { useState } from "react";
import Logo from "../../components/Logo";
import "./styles.css";
import Box from "./CategoryBox";
import western from "../../assets/categories/western.png";
import action from "../../assets/categories/action.png";
import thriller from "../../assets/categories/thriller.png";
import horror from "../../assets/categories/horror.png";
import romance from "../../assets/categories/romance.png";
import fantasy from "../../assets/categories/fantasy.png";
import drama from "../../assets/categories/drama.png";
import music from "../../assets/categories/music.png";
import fiction from "../../assets/categories/fiction.png";
import Chip from "../../components/Chip";
import error from "../../assets/error.svg";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const categoryOptions = [
  {
    id: "Action",
    color: "#FF5209",
    image: <img style={{ width: "100%" }} src={action} />,
  },
  {
    id: "Drama",
    color: "#D7A4FF",
    image: <img style={{ width: "100%" }} src={drama} />,
  },
  {
    id: "Romance",
    color: "#11B800",
    image: <img style={{ width: "100%" }} src={romance} />,
  },
  {
    id: "Thriller",
    color: "#84C2FF",
    image: <img style={{ width: "100%" }} src={thriller} />,
  },
  {
    id: "Western",
    color: "#902500",
    image: <img style={{ width: "100%" }} src={western} />,
  },
  {
    id: "Horror",
    color: "#7358FF",
    image: <img style={{ width: "100%" }} src={horror} />,
  },
  {
    id: "Fantasy",
    color: "#FF4ADE",
    image: <img style={{ width: "100%" }} src={fantasy} />,
  },
  {
    id: "Music",
    color: "#E61E32",
    image: <img style={{ width: "100%" }} src={music} />,
  },
  {
    id: "Fiction",
    color: "#6CD061",
    image: <img style={{ width: "100%" }} src={fiction} />,
  },
];

const index = () => {
  const [selectMovie, setSelectMovie] = useState([]);
  console.log(selectMovie);
  const navigate = useNavigate();
  const handleNextBtn = () => {
    navigate("/showcase");
    setSelectMovie(
      localStorage.setItem("category", JSON.stringify(selectMovie))
    );
  };

  return (
    <div className="main">
      <div className="info-container">
        <div className="info-left-box">
          <Logo className="info-logo" />
          <h1>Choose your entertainment category</h1>
          <div className="info-chip">
            {selectMovie.map((movie) => (
              <Chip
                key={movie}
                data={movie}
                selectMovie={selectMovie}
                setSelectMovie={setSelectMovie}
              />
            ))}
          </div>
          {selectMovie.length >= 3 ? (
            ""
          ) : (
            <p>
              <img src={error} />
              minimun 3 categories required
            </p>
          )}
        </div>
        <div className="info-right-box">
          {categoryOptions.map((genre) => (
            <Box
              key={genre.id}
              data={genre}
              setSelectMovie={setSelectMovie}
              selectMovie={selectMovie}
            />
          ))}
        </div>
      </div>
      <div className="info-btn">
        <Button
          label="Next"
          className="info-next-button"
          disabled={selectMovie.length < 3}
          onClick={handleNextBtn}
        />
      </div>
    </div>
  );
};

export default index;
