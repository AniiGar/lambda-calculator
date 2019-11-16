import React from "react";

const NumberButton = (prop) => {
  return (    
    <button>
      {/* Display a button element rendering the data being passed down from the parent container on props */
      prop}
    </button>
  );
};

export default NumberButton;
