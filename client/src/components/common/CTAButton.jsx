import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

function CTAButton({ variant,goTo,children,className }) {
  return (
    <Link to={goTo} className={className}>
      <Button variant={variant} >
        {children}
      </Button>
    </Link>
  );
}

export default CTAButton;
