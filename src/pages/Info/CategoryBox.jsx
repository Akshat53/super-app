import React from "react";
import "./styles.css";

const Box = (props) => {
  const { data, selectMovie, setSelectMovie } = props;
  const handleClick = () => {
    if (selectMovie.includes(data.id)) {
      setSelectMovie((prev) => prev.filter((item) => item !== data.id));
    } else {
      setSelectMovie((prev) => [...prev, data.id]);
    }
  };

  return (
    <div
      style={{
        backgroundColor: data.color,
        border: `${
          selectMovie.includes(data.id)
            ? "4px solid #D8FC38"
            : "6px solid black"
        }`,
      }}
      className="box"
      onClick={handleClick}
    >
      <h1>{data.id}</h1>
      {data.image}
    </div>
  );
};

export default Box;
