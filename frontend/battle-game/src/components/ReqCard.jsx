import React from "react";
import "./ReqCard.scss";

const ReqCard = ({ user, onAcceptBtn }) => {
  const handleAcceptBtn = () => {
    if (onAcceptBtn) {
      onAcceptBtn();
    }
  };

  return (
    <div className="req-card">
      <div>{user} send you battle request!</div>
      <button onClick={handleAcceptBtn}>Accept</button>
      <button>Deny</button>
    </div>
  );
};

export default ReqCard;
