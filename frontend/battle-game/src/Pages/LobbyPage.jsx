import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import ItemWeapon from "../components/ItemWeapon";
import ItemArmour from "../components/ItemArmour";
import ItemPotion from "../components/ItemPotion";
import InventoryItemWeapon from "../components/InventoryItemWeapon";
import InventoryItemArmour from "../components/InventoryItemArmour";
import InventoryItemPotion from "../components/InventoryItemPotion";
import EquipmentSlotWeapon from "../components/EquipmentSlotWeapon";
import EquipmentSlotArmour from "../components/EquipmentSlotArmour";
import EquipmentSlotPotion from "../components/EquipmentSlotPotion";
import OnlinePlayerCard from "../components/OnlinePlayerCard";
import ReqCard from "../components/ReqCard";
import "./LobbyPage.scss";

const LobbyPage = ({ socket }) => {
  const navigateTo = useNavigate();
  const [money, setMoney] = useState();
  const [userName, setUserName] = useState("");
  const [userImage, setUserImage] = useState();
  const [generatedWeapon, setGeneratedWeapon] = useState({});
  const [generatedArmour, setGeneratedArmour] = useState({});
  const [generatePotion, setGeneratePotion] = useState();
  const [inventoryData, setInventoryData] = useState();
  const [inventoryArmourData, setInventoryArmourData] = useState();
  const [inventoryPotionData, setinventoryPotionData] = useState();
  const [equipedWeapon, setequipedWeapon] = useState();
  const [equipedArmour, setequipedArmour] = useState();
  const [equipedPotion, setequipedPotion] = useState();
  const [needToGenerate, setNeedToGenerate] = useState("");
  const [needToGenerateArmour, setNeedToGenerateArmour] = useState("");
  const [needToGeneratePotion, setNeedToGeneratePotion] = useState("");
  const [connectedUsers, setConnectedUsers] = useState([]);
  const [userRequest, setUserRequest] = useState();

  useEffect(() => {
    socket.on("user_data", (data) => {
      setMoney(data.userMoney);
      setUserName(data.userName);
      setUserImage(data.userImage);

      console.log(data);
    });
  }, []);

  useEffect(() => {
    socket.on("connected_users", (data) => {
      setConnectedUsers(data);
      console.log(data);
    });
  }, [socket]);

  const handleGenerateBtn = () => {
    socket.emit("generate_btn_data");
  };

  useEffect(() => {
    socket.emit("default_equipment");
    socket.on("default_equipment", (data) => {
      setequipedWeapon(data);
      console.log(data);
    });
  }, []);

  useEffect(() => {
    socket.emit("default_armour_equipment");
    socket.on("default_armour_equipment", (data) => {
      setequipedArmour(data);
      console.log(data);
    });
  }, []);

  useEffect(() => {
    socket.emit("default_potion_equipment");
    socket.on("default_potion_equipment", (data) => {
      setequipedPotion(data);
      console.log(data);
    });
  }, []);

  useEffect(() => {
    socket.on("btn_data_generated", (data) => {
      setGeneratedWeapon(data.weapon);
      setGeneratedArmour(data.armour);
      setGeneratePotion(data.potion);
      setMoney(data.money);
      console.log(data);
    });
  }, [socket]);

  const onTake = () => {
    socket.emit("on_take_btn_data", {
      weapon: generatedWeapon,
    });
  };

  const onTakeArmour = () => {
    socket.emit("on_take_armour_btn_data", {
      armour: generatedArmour,
    });
  };

  const onTakePotion = () => {
    socket.emit("on_take_potion_btn_data", {
      potion: generatePotion,
    });
  };

  useEffect(() => {
    socket.on("inventory_items_data", (data) => {
      setInventoryData(data);
      console.log(data);
    });
  }, [socket]);

  useEffect(() => {
    socket.on("inventory_armour_items_data", (data) => {
      setInventoryArmourData(data);
      console.log(data);
    });
  }, [socket]);

  useEffect(() => {
    socket.on("inventory_potion_items_data", (data) => {
      setinventoryPotionData(data);
      console.log(data);
    });
  }, [socket]);

  const onInventoryItemClick = (item) => {
    socket.emit("on_inventory_item_btn_data", {
      weapon: item,
    });
  };

  const onInventoryArmourItemClick = (item) => {
    socket.emit("on_inventory_armour_item_btn_data", {
      armour: item,
    });
  };

  const onInventoryPotionItemClick = (item) => {
    socket.emit("on_inventory_potion_item_btn_data", {
      potion: item,
    });
  };

  useEffect(() => {
    socket.on("equipedWeapon_data", (data) => {
      setequipedWeapon(data);
      console.log(data);
    });
  }, [socket]);

  useEffect(() => {
    socket.on("equipedArmour_data", (data) => {
      setequipedArmour(data);
      console.log(data);
    });
  }, [socket]);

  useEffect(() => {
    socket.on("equipedPotion_data", (data) => {
      setequipedPotion(data);
      console.log(data);
    });
  }, [socket]);

  const handleUnequipBtn = () => {
    socket.emit("unequip_btn_data", {});
  };

  const handleUnequipArmourBtn = () => {
    socket.emit("unequip_armour_btn_data", {});
  };

  const handleUnequipPotionBtn = () => {
    socket.emit("unequip_potion_btn_data", {});
  };

  const onInventoryItemDelete = (item) => {
    socket.emit("on_inventory_item_btn_delete_data", {
      weapon: item,
    });
  };

  const onInventoryArmourItemDelete = (item) => {
    socket.emit("on_inventory_armour_item_btn_delete_data", {
      armour: item,
    });
  };

  const onInventoryPotionItemDelete = (item) => {
    socket.emit("on_inventory_potion_item_btn_delete_data", {
      potion: item,
    });
  };

  useEffect(() => {
    socket.on("need_to_generate", (data) => {
      setNeedToGenerate(data.msg);
      console.log(data);
    });
  }, [socket]);

  useEffect(() => {
    socket.on("need_to_generate_armour", (data) => {
      setNeedToGenerateArmour(data.msg);
      console.log(data);
    });
  }, [socket]);

  useEffect(() => {
    socket.on("need_to_generate_potion", (data) => {
      setNeedToGeneratePotion(data.msg);
      console.log(data);
    });
  }, [socket]);

  const onSendReq = (user) => () => {
    socket.emit("on_send_req_btn_data", connectedUsers[user].userId);
  };

  useEffect(() => {
    socket.on("battle-req", (data) => {
      setUserRequest(data);
      console.log(data);
    });
  }, [socket]);

  return (
    <div className="lobby-page">
      {userRequest && (
        <ReqCard onAcceptBtn={onAcceptBtn} user={userRequest.userName} />
      )}
      <div></div>
      <div className="lobby-page__top-container">
        <div>Money: ${money}</div>
        <div className="lobby-page__logout-container">
          <div>Logout - {userName}</div>
          <img className="lobby-page__user-img" src={userImage} alt="" />
        </div>
      </div>
      <div className="lobby-page__left-right-boxes-container">
        <div className="lobby-page__left-box">
          <div className="lobby-page__items-container">
            <div className="lobby-page__generate-items-box">
              <div className="lobby-page__container-items">
                {generatedWeapon && (
                  <ItemWeapon
                    level={generatedWeapon.level}
                    image={
                      needToGenerate !== "click to generate!"
                        ? generatedWeapon.weaponImg
                        : undefined
                    }
                    damage={generatedWeapon.maxDmg}
                    gold={generatedWeapon.gold}
                    effects={generatedWeapon.effectsSlot}
                    onTake={onTake}
                  />
                )}

                {generatedArmour && (
                  <ItemArmour
                    level={generatedArmour.level}
                    image={
                      needToGenerateArmour !== "click to generate!"
                        ? generatedArmour.armourImg
                        : undefined
                    }
                    armour={generatedArmour.maxArm}
                    effects={generatedArmour.effectsSlot}
                    onTakeArmour={onTakeArmour}
                  />
                )}

                <ItemPotion
                  image={
                    needToGeneratePotion !== "click to generate!"
                      ? "https://preview.redd.it/mega-thread-on-how-to-make-truly-incredible-potions-with-v0-6t46k37psqy91.png?width=512&format=png&auto=webp&s=11e884456dcb137d3fcb3e95b17635ac1e765861"
                      : undefined
                  }
                  potion={generatePotion ? generatePotion.hp : undefined}
                  onTakePotion={onTakePotion}
                />
              </div>
              <button onClick={handleGenerateBtn}>Generate</button>
            </div>
          </div>

          <div className="lobby-page__items-and-equipment-box">
            <div className="lobby-page__inventory-container">
              {inventoryData &&
                inventoryData.map((item, index) => (
                  <InventoryItemWeapon
                    item={inventoryData[index]}
                    key={index}
                    level={item.level}
                    image={item.weaponImg}
                    damage={item.maxDmg}
                    gold={item.gold}
                    effects={item.effectsSlot}
                    onInventoryItemClick={onInventoryItemClick}
                    onInventoryItemDelete={onInventoryItemDelete}
                  />
                ))}

              {inventoryArmourData &&
                inventoryArmourData.map((item, index) => (
                  <InventoryItemArmour
                    item={inventoryArmourData[index]}
                    key={index}
                    level={item.level}
                    armour={item.armour}
                    image={item.armourImg}
                    effects={item.effectsSlot}
                    onInventoryArmourItemClick={onInventoryArmourItemClick}
                    onInventoryArmourItemDelete={onInventoryArmourItemDelete}
                  />
                ))}

              {inventoryPotionData &&
                inventoryPotionData.map((item, index) => (
                  <InventoryItemPotion
                    item={inventoryPotionData[index]}
                    key={index}
                    potion={item.hp}
                    image={
                      "https://preview.redd.it/mega-thread-on-how-to-make-truly-incredible-potions-with-v0-6t46k37psqy91.png?width=512&format=png&auto=webp&s=11e884456dcb137d3fcb3e95b17635ac1e765861"
                    }
                    onInventoryPotionItemClick={onInventoryPotionItemClick}
                    onInventoryPotionItemDelete={onInventoryPotionItemDelete}
                  />
                ))}
            </div>

            <div className="lobby-page__equipment-slots-container">
              {equipedWeapon && (
                <EquipmentSlotWeapon
                  level={equipedWeapon.weapon.level}
                  image={equipedWeapon.weapon.weaponImg}
                  damage={equipedWeapon.weapon.maxDmg}
                  gold={equipedWeapon.weapon.gold}
                  effects={equipedWeapon.weapon.effectsSlot}
                  handleUnequipBtn={handleUnequipBtn}
                />
              )}

              {equipedArmour && (
                <EquipmentSlotArmour
                  level={equipedArmour.armour.level}
                  image={equipedArmour.armour.armourImg}
                  armour={equipedArmour.armour.maxArm}
                  effects={equipedArmour.armour.effectsSlot}
                  handleUnequipArmourBtn={handleUnequipArmourBtn}
                />
              )}

              {equipedPotion && (
                <EquipmentSlotPotion
                  potion={equipedPotion.hp}
                  image={
                    "https://preview.redd.it/mega-thread-on-how-to-make-truly-incredible-potions-with-v0-6t46k37psqy91.png?width=512&format=png&auto=webp&s=11e884456dcb137d3fcb3e95b17635ac1e765861"
                  }
                  handleUnequipPotionBtn={handleUnequipPotionBtn}
                />
              )}
            </div>
          </div>
        </div>

        <div className="lobby-page__right-box">
          {Array.isArray(connectedUsers) &&
            connectedUsers.map((user, index) => (
              <OnlinePlayerCard
                key={index}
                image={user.userImage}
                userName={user.userName}
                onSendReq={onSendReq(index)}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default LobbyPage;
