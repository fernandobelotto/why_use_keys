import React, { useState } from "react";

function WithKeys() {
  const [items, setItems] = useState(["item 1", "item 2", "item 3"]);
  const removeItem = (item) => {
    setItems(items.filter((i) => i !== item));
  };

  return (
    <ul>
      {items.map((item) => {
        return (
          <li key={item}>
            <label htmlFor={item}>{item}</label>
            <input
              id={item}
              defaultValue={item}
            ></input>
            <button onClick={() => removeItem(item)}>remove item</button>
          </li>
        );
      })}
    </ul>
  );
}

export default WithKeys;
