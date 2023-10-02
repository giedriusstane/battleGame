import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./InventoryItemPotion.scss";

const InventoryItemPotion = ({
  image,
  potion,
  item,
  onInventoryPotionItemClick,
  onInventoryPotionItemDelete,
}) => {
  const handleInventoryPotionItemClick = () => {
    if (onInventoryPotionItemClick) {
      onInventoryPotionItemClick(item);
    }
  };

  const handleInventoryPotionItemDelete = () => {
    if (onInventoryPotionItemDelete) {
      onInventoryPotionItemDelete(item);
    }
  };

  return (
    <div className="inventory-item-potion">
      <FontAwesomeIcon
        onClick={handleInventoryPotionItemDelete}
        className="inventory-item-potion__btn-delete"
        icon={faXmark}
      />
      <div className="inventory-item-potion__img">
        <div className="inventory-item-potion__modal">
          <p>Hp: {potion}</p>
        </div>
        <img src={image} alt="" />
      </div>
      <button
        onClick={handleInventoryPotionItemClick}
        className="inventory-item-potion__btn-equip"
      >
        Equip
      </button>
    </div>
  );
};
export default InventoryItemPotion;
