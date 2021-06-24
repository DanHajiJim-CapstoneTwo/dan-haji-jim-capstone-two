// DEPENDENCIES
import React from "react";

// STYLING
import "./Header.css";

// FUNCTIONAL COMPONENT
function Header({ owner }) {
  return <div className="header">{owner} Products</div>;
}

export default Header;
