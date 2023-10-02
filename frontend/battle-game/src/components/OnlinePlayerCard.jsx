import React from "react";
import "./OnlinePlayerCard.scss";

const OnlinePlayerCard = ({ image, userName, onSendReq }) => {
  const handleSendBattleRequestBtn = () => {
    if (onSendReq) {
      onSendReq();
    }
  };

  return (
    <div className="online-player-card">
      <img className="online-player-card__user-img" src={image} alt="" />
      <div className="online-player-card__left-container">
        <h3>{userName}</h3>
        <button onClick={handleSendBattleRequestBtn}>
          send battle request
        </button>
      </div>
    </div>
  );
};

export default OnlinePlayerCard;
