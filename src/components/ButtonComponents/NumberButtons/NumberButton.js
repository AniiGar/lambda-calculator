import React from "react";

const NumberButton = (prop) => {
  return (    
    <button className='numButtons'>
      {/* Display a button element rendering the data being passed down from the parent container on props */
      prop.numberText}
    </button>
  );
};

export default NumberButton;