import React from "react";

const Chip = (props) => {
  const { data, selectMovie, setSelectMovie } = props;
  const handleClick = () => {
    if (selectMovie.includes(data)) {
      setSelectMovie((prev) => prev.filter((item) => item !== data));
    } else {
      setSelectMovie((prev) => [...prev, data.id]);
    }
  };
  return (
    <div>
      {data} &nbsp;&nbsp;&nbsp;<span onClick={handleClick}>X</span>
    </div>
  );
};

export default Chip;
