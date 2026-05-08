"use client";

import Image from "next/image";
import { useState } from "react";
import { Button, Dropdown, Fieldset, Overlay } from "@/components";

const CallbackForm = ({ isFormOpen, closeForm }) => {
  const [option, setOption] = useState("Choose");
  const [showDropdown, setShowDropdown] = useState(false);

  const optionClickHandler = (e) => {
    setOption(e.target.dataset.name);
    setShowDropdown(false);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Overlay clickHandler={closeForm} />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[500px] sm:w-full w-[85%] bg-white sm:p-10 p-6 my-8 rounded-[10px] shadow-[0_0_5px_rgba(0,0,0,0.3)] z-[80]">
        <div className="flex justify-end mb-12">
          <Image
            src="/assets/close-icon.svg"
            alt="close-icon"
            width={24}
            height={24}
            onClick={closeForm}
            className="cursor-pointer"
          />
        </div>
        <form
          className="flex flex-col gap-6 relative"
          onSubmit={formSubmitHandler}
        >
          <Fieldset id="your name">Your name</Fieldset>
          <Fieldset id="contact number">Contact Number</Fieldset>
          <Fieldset id="college name">College Name</Fieldset>
          <Dropdown
            option={option}
            optionClickHandler={optionClickHandler}
            showDropdown={showDropdown}
            setShowDropdown={setShowDropdown}
            options={[
              "Upto ₹10000/-",
              "Between ₹10-15K",
              "Premium ₹15000/- Above",
            ]}
            height="161px"
          />
          <div className="flex justify-center p-4">
            <Button clickHandler={() => {}}>Submit</Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CallbackForm;
