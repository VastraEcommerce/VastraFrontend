import TextField from "@mui/material/TextField";
import { useState } from "react";

const ColorfieldWrapper = ({ name, ...otherProps }) => {
  const [color, setColor] = useState("#000000");

  const handleColor = (evt) => {
    setColor(evt.target.value);
  };

  const configColorfield = {
    ...otherProps,
    value: color,
    onInput: handleColor,
    type: "color",
    // fullWidth: true,
    variant: "outlined",
    helperText: color,
  };

  return <TextField {...configColorfield} />;
};

export default ColorfieldWrapper;
