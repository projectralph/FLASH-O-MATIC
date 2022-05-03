import React from "react";

const GeneralButton = ({
  btnStyle,
  extraStyles = "",
  icon,
  text,
  action = () => {},
}) => {
  return (
    <div className={extraStyles}>
      <button className={`btn btn-${btnStyle} m-2`} onClick={action}>
        <span className={`oi oi-${icon}`} /> {text}{" "}
      </button>
    </div>
  );
};

export default GeneralButton;