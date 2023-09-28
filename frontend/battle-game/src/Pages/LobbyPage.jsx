import { useEffect, useState } from "react";
import Item from "../components/Item";
import "./LobbyPage.scss";

const LobbyPage = ({ socket }) => {
  const [money, setMoney] = useState("");
  const [userName, setUserName] = useState("");
  const [generatedWeapon, setGeneratedWeapon] = useState({});
  const [generatedArmour, setGeneratedArmour] = useState({});

  useEffect(() => {
    socket.on("user_data", (data) => {
      setMoney(data.userMoney);
      setUserName(data.userName);
      console.log(data);
    });
  }, []);

  const handleGenerateBtn = () => {
    socket.emit("generate_btn_data", {
      generate: true,
    });

    socket.on("generated_weapon_data", (data) => {
      setGeneratedWeapon(data.weapon);
      setGeneratedArmour(data.armour);
      console.log(data);
    });
  };

  return (
    <div className="lobby-page">
      <div className="lobby-page__top-container">
        <div>Money: ${money}</div>
        <div>Logout - {userName}</div>
      </div>

      <div className="lobby-page__generate-items-box">
        <div className="lobby-page__items-container">
          {generatedWeapon && (
            <Item
              level={generatedWeapon.level}
              image={generatedWeapon.weaponImg}
            />
          )}

          {generatedArmour && (
            <Item
              level={generatedArmour.level}
              image={generatedArmour.armourImg}
            />
          )}
          <Item 
            image={
              "https://preview.redd.it/mega-thread-on-how-to-make-truly-incredible-potions-with-v0-6t46k37psqy91.png?width=512&format=png&auto=webp&s=11e884456dcb137d3fcb3e95b17635ac1e765861"
            }
          />
        </div>
        <button onClick={handleGenerateBtn}>Generate</button>
      </div>
    </div>
  );
};

export default LobbyPage;
