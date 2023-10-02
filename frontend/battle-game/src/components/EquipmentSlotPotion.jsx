import React from "react";
import "./EquipmentSlotPotion.scss";

const EquipmentSlotPotion = ({ image, hp, handleUnequipPotionBtn }) => {
  return (
    <div className="equipment-slot-potion">
      <div className="equipment-slot-potion__img">
        <div className="equipment-slot-potion__modal">
          <p>Hp: {hp}</p>
        </div>

        <div className="equipment-slot__img"></div>
      </div>
      <button
        onClick={handleUnequipPotionBtn}
        className="equipment-slot-potion__btn-unequip"
      >
        Unequip
      </button>
    </div>
  );
};
export default EquipmentSlotPotion;
