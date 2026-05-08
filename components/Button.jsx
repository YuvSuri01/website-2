import React from "react";

const Button = ({ children, clickHandler }) => {
  return (
    <button
      className="border-0 focus:outline-none bg-primary rounded-[10px] text-white font-medium text-base w-[130px] h-[45px] flex justify-center items-center p-2"
      onClick={clickHandler}
    >
      {children}
    </button>
  );
};

export default Button;
