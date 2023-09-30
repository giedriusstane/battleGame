import { useEffect, useState } from "react";
import ItemWeapon from "../components/ItemWeapon";
import ItemArmour from "../components/ItemArmour";
import ItemPotion from "../components/ItemPotion";
import InventoryItemWeapon from "../components/InventoryItemWeapon";
import EquipmentSlotWeapon from "../components/EquipmentSlotWeapon";
import "./LobbyPage.scss";

const LobbyPage = ({ socket }) => {
  const [money, setMoney] = useState();
  const [userName, setUserName] = useState("");
  const [generatedWeapon, setGeneratedWeapon] = useState({});
  const [generatedArmour, setGeneratedArmour] = useState({});
  const [potionHp, setPotionHp] = useState(0);
  const [inventoryData, setInventoryData] = useState();
  const [equipedWeapon, setequipedWeapon] = useState();

  useEffect(() => {
    socket.on("user_data", (data) => {
      setMoney(data.userMoney);
      setUserName(data.userName);
      console.log(data);
    });
  }, []);

  const handleGenerateBtn = () => {
    socket.emit("generate_btn_data", {});
  };

  useEffect(() => {
    socket.emit("default_equipment");
    socket.on("default_equipment", (data) => {
      setequipedWeapon(data);
      console.log(data);
    });
  }, []);

  useEffect(() => {
    socket.on("btn_data_generated", (data) => {
      setGeneratedWeapon(data.weapon);
      setGeneratedArmour(data.armour);
      setPotionHp(data.potion);
      setMoney(data.money);
      console.log(data);
    });
  }, [socket]);

  const onTake = () => {
    socket.emit("on_take_btn_data", {
      weapon: generatedWeapon,
    });
  };

  useEffect(() => {
    socket.on("inventory_items_data", (data) => {
      setInventoryData(data);
      console.log(data);
    });
  }, [socket]);

  const onInventoryItemClick = (item) => {
    socket.emit("on_inventory_item_btn_data", {
      weapon: item,
    });
  };

  useEffect(() => {
    socket.on("equipedWeapon_data", (data) => {
      setequipedWeapon(data);
      console.log(data);
    });
  }, [socket]);

  const handleUnequipBtn = () => {
    socket.emit("unequip_btn_data", {});
  };

  const onInventoryItemDelete = (item) => {
    socket.emit("on_inventory_item_btn_delete_data", {
      weapon: item,
    });
  };

  return (
    <div className="lobby-page">
      <div className="lobby-page__top-container">
        <div>Money: ${money}</div>
        <div>Logout - {userName}</div>
      </div>
      <div className="lobby-page__items-container">
        <div className="lobby-page__generate-items-box">
          <div className="lobby-page__container-items">
            {generatedWeapon && (
              <ItemWeapon
                level={generatedWeapon.level}
                image={generatedWeapon.weaponImg}
                damage={generatedWeapon.maxDmg}
                gold={generatedWeapon.gold}
                effects={generatedWeapon.effectsSlot}
                onTake={onTake}
              />
            )}

            {generatedArmour && (
              <ItemArmour
                level={generatedArmour.level}
                image={generatedArmour.armourImg}
                armour={generatedArmour.maxArm}
                effects={generatedArmour.effectsSlot}
              />
            )}

            <ItemPotion
              image={
                "https://preview.redd.it/mega-thread-on-how-to-make-truly-incredible-potions-with-v0-6t46k37psqy91.png?width=512&format=png&auto=webp&s=11e884456dcb137d3fcb3e95b17635ac1e765861"
              }
              potion={potionHp}
            />
          </div>
          <button onClick={handleGenerateBtn}>Generate</button>
        </div>
      </div>

      <div className="lobby-page__items-and-equipment-box">
        <div className="lobby-page__inventory-container">
          {inventoryData ? (
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
            ))
          ) : (
            <p className="lobby-page__empty-inventory">Inventory is empty!</p>
          )}
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
        </div>
      </div>
    </div>
  );
};

export default LobbyPage;
