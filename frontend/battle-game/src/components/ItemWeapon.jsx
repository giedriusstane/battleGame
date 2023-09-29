import React from "react";
import "./ItemWeapon.scss";

const ItemWeapon = ({ image, level, damage, gold, effects, onTake }) => {
  let bgImageClassName = "item-weapon__bg-image";

  if (level === "A") {
    bgImageClassName += " item-weapon__bg-image-level-A";
  } else if (level === "B") {
    bgImageClassName += " item-weapon__bg-image-level-B";
  } else if (level === "C") {
    bgImageClassName += " item-weapon__bg-image-level-C";
  }

  effects = effects || [];

  const handleTakeButtonClick = () => {
    if (onTake) {
      onTake();
    }
  };

  return (
    <div className="item-weapon">
      <div className="item-weapon__img">
        <div className="item-weapon__modal">
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
        {image ? (
          <div
            className={bgImageClassName}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ) : (
          <p className="item-weapon__generating">Click Generate Button!</p>
        )}
      </div>
      <button onClick={handleTakeButtonClick} className="item-weapon__btn-take">
        Take
      </button>
    </div>
  );
};

export default ItemWeapon;
