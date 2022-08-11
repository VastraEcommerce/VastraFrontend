import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useField } from "formik";

const ColorfieldWrapper = ({ name, ...otherProps }) => {
  // const [color, setColor] = useState("#000000");
  const [field, meta] = useField(name);

  // const handleColor = (evt) => {
  //   setColor(evt.target.value);
  // };

  const configColorfield = {
    ...field,
    ...otherProps,
    fullWidth: true,
    type: "color",
    variant: "outlined",
  };

  return <TextField {...configColorfield} />;
};

export default ColorfieldWrapper;
