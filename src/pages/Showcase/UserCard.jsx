import React from "react";
import "../Showcase/styles.css";

const UserCard = (props) => {
  const { img, name, email, userName, children } = props;

  return (
    <div className="user-details">
      <div className="user-img">
        <img src={img} alt="profile" />
      </div>
      <div className="user-info bg-t">
        <p>{name}</p>
        <p className="email">{email}</p>
        <h1>{userName}</h1>
        <div className="bg-t cat-tag">{children}</div>
      </div>
    </div>
  );
};

export default UserCard;
