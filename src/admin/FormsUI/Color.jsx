import { useState } from "react";

const Color = ({ name, ...otherProps }) => {
  const [color, setColor] = useState("#000000");

  const handleColor = (evt) => {
    setColor(evt.target.value);
  };

  return (
    <>
      <label htmlFor="color">Color</label>
      <input
        type="color"
        id="color"
        name="color"
        value={color}
        onInput={handleColor}
      />
    </>
  );
};

export default Color;
