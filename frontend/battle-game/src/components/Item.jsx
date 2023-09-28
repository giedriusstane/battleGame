import React from "react";
import "./Item.scss";

const Item = ({ image, level, potion }) => {
  let bgImageClassName = "item__bg-image";

  if (level === "A") {
    bgImageClassName += " item__bg-image-level-A";
  } else if (level === "B") {
    bgImageClassName += " item__bg-image-level-B";
  } else if (level === "C") {
    bgImageClassName += " item__bg-image-level-C";
  }

  let potionClass = "item_potion";
  if (potion === true) {
    
  }

  return (
    <div className="item">
      {image ? (
        <div
          className={bgImageClassName}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ) : (
        <p className="item__generating">Click Generate Button!</p>
      )}
      <button className="item__btn-take">Take</button>
    </div>
  );
};

export default Item;
