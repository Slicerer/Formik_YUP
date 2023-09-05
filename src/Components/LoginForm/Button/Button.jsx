import React from "react";
import Button from "react-bootstrap/Button";

const Button = ({ label, ...rest }) => {
  return (
    <Button type="submit" {...rest}>
      {label}
    </Button>
  );
};

export default Button;
