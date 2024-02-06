import React from "react";
import UserCard from "./UserCard";
import Profile from "../../assets/profile.png";
import "../Showcase/styles.css";
import Tag from "../../components/Tag";

const Showcase = () => {
  const storedData = JSON.parse(localStorage.getItem("userInfo"));
  const cat = JSON.parse(localStorage.getItem("category"));
  console.log(cat);

  return (
    <div className="showcase">
      <UserCard
        img={Profile}
        name={storedData.name}
        email={storedData.email}
        userName={storedData.userName}
      >
        {cat.map((movies) => {
          return <Tag label={movies} />;
        })}
      </UserCard>
      <div></div>
    </div>
  );
};

export default Showcase;
