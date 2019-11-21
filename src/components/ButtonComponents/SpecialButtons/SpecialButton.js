import React from "react";

const SpecialButton = (props) => {
  return (
    <button className='specButtons'>
      {/* Display a button element rendering the data being passed down from the parent container on props */
      props.specialText}
    </button>
  );
};
export default SpecialButton;