import React from "react";
import "./ItemPotion.scss";

const ItemPotion = ({ image, potion, onTakePotion }) => {
  const handleTakePotionButtonClick = () => {
    if (onTakePotion) {
      onTakePotion();
    }
  };

  return (
    <div className="item-potion">
      <div className="item-potion__img">
        <div className="item-potion__modal">
          <p>Potion: {potion}hp</p>
        </div>

        {image ? (
          <div
            className="item-potion__bg-image "
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ) : (
          <p className="item-armour__generating">Click Generate Button!</p>
        )}
      </div>
      <button
        onClick={handleTakePotionButtonClick}
        className="item-potion__btn-take"
      >
        Take
      </button>
    </div>
  );
};

export default ItemPotion;
