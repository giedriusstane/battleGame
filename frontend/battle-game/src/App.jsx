import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import ArenaPage from "./Pages/ArenaPage";
import LobbyPage from "./Pages/LobbyPage";
import { io } from "socket.io-client";

const App = () => {
  const socket = io.connect("http://localhost:3000");

  return (
    <Routes>
      <Route path="/" element={<LoginPage socket={socket} />} />
      <Route path="/items" element={<LobbyPage socket={socket} />} />
      <Route path="/arena" element={<ArenaPage />} />
    </Routes>
  );
};

export default App;
