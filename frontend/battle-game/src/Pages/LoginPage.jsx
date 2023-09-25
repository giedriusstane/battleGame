import React, { useRef } from "react";
import "./LoginPage.scss";
import { io } from "socket.io-client";

const selectableImages = [
  "https://i.pinimg.com/1200x/b6/d3/80/b6d380323769a6a6815197c5a0d5b636.jpg",
  "https://i.pinimg.com/736x/55/ba/78/55ba787f39e438e9c6306059f513be3e.jpg",
  "https://i.pinimg.com/736x/fc/67/bc/fc67bcecfa5d3daa04bc8c477328d522.jpg",
  "https://www.pngmart.com/files/5/Woman-Warrior-PNG-Transparent.png",
  "https://i.pinimg.com/564x/53/d4/3e/53d43e7e90e4cb5b812400bbef08683d.jpg",
  "https://i.pinimg.com/originals/42/42/12/424212f8d8c647b73cb50344105c0248.jpg",
  "https://i.pinimg.com/originals/7e/c4/6e/7ec46e26a30e00c5b61d81ea3365d919.png",
  "https://i.pinimg.com/474x/5a/ea/33/5aea33c98558aa1eb89af256be5974c5.jpg",
  "https://i.pinimg.com/1200x/79/7e/48/797e48bd836f3ae7fd5171711b0f5d82.jpg",
  "https://i.pinimg.com/originals/05/b3/99/05b399f96dbe3f26607b19f7293bbe94.png",
  "https://i.pinimg.com/564x/09/d3/e7/09d3e743e4aec65509aa87eee4f6599d.jpg",
  "https://i.pinimg.com/564x/65/32/fb/6532fba67c37b029167848dd41c96556.jpg",
];

const socket = io.connect("http://localhost:3000");

const LoginPage = () => {
  const inputUserNameRef = useRef();
  const 

  const generatePlayerImage = () => {
    const imgArray = [];
    for (let i = 0; i < 12; i++) {
      imgArray.push(
        <img
          className="login-page__player-img"
          key={i}
          src={selectableImages[i]}
          alt=""
        />
      );
    }

    return imgArray;
  };

  const sendUserData = () => {
    socket.emit("user_data", {
      userName: inputUserNameRef.current.value,
      userImage:
        "https://i.pinimg.com/474x/5a/ea/33/5aea33c98558aa1eb89af256be5974c5.jpg",
    });

    inputUserNameRef.current.value = "";
  };

  return (
    <div className="login-page">
      <div className="login-page__players-img-container">
        {generatePlayerImage()}
      </div>
      <div className="login-page__inputs-container">
        <input type="text" placeholder="username" ref={inputUserNameRef} />
        <button onClick={sendUserData}>Start Game</button>
      </div>
    </div>
  );
};

export default LoginPage;
