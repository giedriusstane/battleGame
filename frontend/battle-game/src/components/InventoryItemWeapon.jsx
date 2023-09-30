import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./InventoryItemWeapon.scss";

const InventoryItemWeapon = ({
  image,
  level,
  damage,
  gold,
  effects,
  onInventoryItemClick,
  item,
  onInventoryItemDelete,
}) => {
  let bgImageClassName = "inventory-item-weapon__img";

  if (level === "A") {
    bgImageClassName += " inventory-item-weapon__bg-image-level-A";
  } else if (level === "B") {
    bgImageClassName += " inventory-item-weapon__bg-image-level-B";
  } else if (level === "C") {
    bgImageClassName += " inventory-item-weapon__bg-image-level-C";
  }

  effects = effects || [];

  const handleInventoryItemClick = () => {
    if (onInventoryItemClick) {
      onInventoryItemClick(item);
    }
  };

  const handleInventoryItemDelete = () => {
    if (onInventoryItemDelete) {
      onInventoryItemDelete(item);
    }
  };

  return (
    <div className="inventory-item-weapon">
      <FontAwesomeIcon
        onClick={handleInventoryItemDelete}
        className="inventory-item-weapon__btn-delete"
        icon={faXmark}
      />
      <div className="inventory-item-weapon__img">
        <div className="inventory-item-weapon__modal">
          <p>Level: {level}</p>
          <p>Max damage: {damage}</p>
          <p>Generate gold: {gold}</p>
          {effects.length > 0 ? (
            <div>
              <p>Effects {effects.length}:</p>
              <div>
                {effects.map((effect, index) => (
                  <p key={index}>{effect}</p>
                ))}
              </div>
            </div>
          ) : (
            <p>Effects: 0</p>
          )}
        </div>
        {image && (
          <div
            className={bgImageClassName}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        )}
      </div>
      <button
        onClick={handleInventoryItemClick}
        className="inventory-item-weapon__btn-equip"
      >
        Equip
      </button>
    </div>
  );
};
export default InventoryItemWeapon;
