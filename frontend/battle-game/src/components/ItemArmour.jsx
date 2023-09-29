import React from "react";
import "./ItemArmour.scss";

const ItemArmour = ({ image, level, armour, effects }) => {
  let bgImageClassName = "item-armour__bg-image";

  if (level === "A") {
    bgImageClassName += " item-armour__bg-image-level-A";
  } else if (level === "B") {
    bgImageClassName += " item-armour__bg-image-level-B";
  } else if (level === "C") {
    bgImageClassName += " item-armour__bg-image-level-C";
  }

  effects = effects || [];

  return (
    <div className="item-armour">
      <div className="item-armour__img">
        <div className="item-armour__modal">
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
        {image ? (
          <div
            className={bgImageClassName}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ) : (
          <p className="item-armour__generating">Click Generate Button!</p>
        )}
      </div>
      <button className="item-armour__btn-take">Take</button>
    </div>
  );
};

export default ItemArmour;
