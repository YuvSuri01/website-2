"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Button, Dropdown, Fieldset, Overlay } from "@/components";

const Page = () => {
  const [option, setOption] = useState("Choose");
  const [showDropdown, setShowDropdown] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    openPopup();
  };

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const optionClickHandler = (e) => {
    setOption(e.target.dataset.name);
    setShowDropdown(false);
  };

  return (
    <>
      <div>
        <div className="max-w-[600px] sm:mx-auto mx-8 sm:p-10 p-6 my-8 rounded-[10px] shadow-[0_0_5px_rgba(0,0,0,0.3)] bg-white">
          <p className="text-center leading-[30px] mb-8 font-semibold text-[#777]">
            Please fill this form, our operation team will contact you asap.
          </p>
          <form
            className="relative flex flex-col gap-6"
            onSubmit={formSubmitHandler}
          >
            <Fieldset id="your name">Your name</Fieldset>
            <Fieldset id="pg name">PG Name</Fieldset>
            <Fieldset id="whatsapp number">Whatsapp Number</Fieldset>
            <Fieldset id="contact number">Contact number</Fieldset>

            <div className="relative">
              <Dropdown
                showDropdown={showDropdown}
                setShowDropdown={setShowDropdown}
                option={option}
                optionClickHandler={optionClickHandler}
                options={["Girls PG", "Boys PG", "Coed PG"]}
                topPosition="490px"
                height="161px"
              />
            </div>
            <Fieldset id="location">PG Location</Fieldset>
            <Fieldset id="college name">
              Nearby College / Institute name
            </Fieldset>
            <div className="flex justify-center p-4">
              <Button clickHandler={() => {}}>Submit</Button>
            </div>
          </form>
        </div>
      </div>
      {showPopup && (
        <>
          <Overlay clickHandler={closePopup}>
            <p className="sm:p-16 p-8 shadow-[0_0_5px_rgba(0,0,0,0.3)] rounded-[10px] text-center bg-white z-[80] animate-scaleUp">
              Thank you for filling the form. <br /> Your response has been
              recorded. <br /> Our team will assist you shortly.
            </p>
          </Overlay>
        </>
      )}
    </>
  );
};

export default Page;
