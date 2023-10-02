import React from "react";
import "./EquipmentSlotArmour.scss";

const EquipmentSlotArmour = ({
  image,
  level,
  armour,
  effects,
  handleUnequipArmourBtn,
}) => {
  let bgImageClassName = "equipment-slot-armour__img";

  if (level === "A") {
    bgImageClassName += " equipment-slot-armour__bg-image-level-A";
  } else if (level === "B") {
    bgImageClassName += " equipment-slot-armour__bg-image-level-B";
  } else if (level === "C") {
    bgImageClassName += " equipment-slot-armour__bg-image-level-C";
  }

  effects = effects || [];

  return (
    <div className="equipment-slot-armour">
      <div className="equipment-slot-armour__img">
        <div className="equipment-slot-armour__modal">
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
        onClick={handleUnequipArmourBtn}
        className="equipment-slot-armour__btn-unequip"
      >
        Unequip
      </button>
    </div>
  );
};
export default EquipmentSlotArmour;
