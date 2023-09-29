import React from "react";
import "./EquipmentSlotWeapon.scss";

const EquipmentSlotWeapon = ({
  image,
  level,
  damage,
  gold,
  effects,
  handleUnequipBtn,
}) => {
  let bgImageClassName = "equipment-slot-weapon__img";

  if (level === "A") {
    bgImageClassName += " equipment-slot-weapon__bg-image-level-A";
  } else if (level === "B") {
    bgImageClassName += " equipment-slot-weapon__bg-image-level-B";
  } else if (level === "C") {
    bgImageClassName += " equipment-slot-weapon__bg-image-level-C";
  }

  effects = effects || [];

  // const handleUnequipBtn = () => {
  //   if(handleUnequipBtn){
  //    // handleUnequipBtn();
  //   }
  // };

  return (
    <div className="equipment-slot-weapon">
      <div className="equipment-slot-weapon__img">
        <div className="equipment-slot-weapon__modal">
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
        onClick={handleUnequipBtn}
        className="equipment-slot-weapon__btn-unequip"
      >
        Unequip
      </button>
    </div>
  );
};
export default EquipmentSlotWeapon;
