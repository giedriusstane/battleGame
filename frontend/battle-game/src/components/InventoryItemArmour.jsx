import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./InventoryItemArmour.scss";

const InventoryItemArmour = ({
  image,
  level,
  armour,
  effects,
  onInventoryArmourItemClick,
  item,
  onInventoryArmourItemDelete,
}) => {
  let bgImageClassName = "inventory-item-armour__img";

  if (level === "A") {
    bgImageClassName += " inventory-item-armour__bg-image-level-A";
  } else if (level === "B") {
    bgImageClassName += " inventory-item-armour__bg-image-level-B";
  } else if (level === "C") {
    bgImageClassName += " inventory-item-armour__bg-image-level-C";
  }

  effects = effects || [];

  const handleInventoryArmourItemClick = () => {
    if (onInventoryArmourItemClick) {
      onInventoryArmourItemClick(item);
    }
  };

  const handleInventoryArmourItemDelete = () => {
    if (onInventoryArmourItemDelete) {
      onInventoryArmourItemDelete(item);
    }
  };

  return (
    <div className="inventory-item-armour">
      <FontAwesomeIcon
        onClick={handleInventoryArmourItemDelete}
        className="inventory-item-armour__btn-delete"
        icon={faXmark}
      />
      <div className="inventory-item-armour__img">
        <div className="inventory-item-armour__modal">
          <p>Level: {level}</p>
          <p>Max armour: {armour}</p>
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
        onClick={handleInventoryArmourItemClick}
        className="inventory-item-armour__btn-equip"
      >
        Equip
      </button>
    </div>
  );
};
export default InventoryItemArmour;
