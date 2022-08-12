import Button from "@mui/material/Button";
import { useFormikContext } from "formik";

const ButtonWrapper = ({ children, ...otherProps }) => {
  const { submitForm, resetForm } = useFormikContext();

  const handleSubmit = async () => {
    await submitForm();
    resetForm();
  };

  const configButton = {
    ...otherProps,
    variant: "contained",
    component: "span",
    fullWidth: true,
    onClick: handleSubmit,
  };

  return <Button {...configButton}>{children}</Button>;
};

export default ButtonWrapper;
