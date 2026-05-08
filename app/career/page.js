"use client";

import { useState } from "react";
import { Button, Dropdown, Fieldset, Overlay } from "@/components";

const Career = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [option, setOption] = useState("Choose Post");
  const [showPopup, setShowPopup] = useState(false);

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

  const formSubmitHandler = (e) => {
    e.preventDefault();
    openPopup();
  };

  return (
    <>
      <div className="mb-4 flex justify-center items-center sm:px-0 px-8">
        <p className="sm:text-lg text-base font-medium italic text-[#000] text-center sm:leading-[36px] leading-[30px] min-[950px]:w-1/3 w-full">
          Thank you for showing interest in Yaadgar Safar Internship Program
        </p>
      </div>
      <div>
        <div className="max-w-[600px] sm:mx-auto mx-8 sm:p-10 p-6 my-8 rounded-[10px] shadow-[0_0_5px_rgba(0,0,0,0.3)] bg-white">
          <p className="text-center leading-[30px] mb-8 font-semibold text-[#777]">
            Please fill this form correctly, our HR Manager will connect with
            you soon.
          </p>
          <form
            className="relative flex flex-col gap-6"
            onSubmit={formSubmitHandler}
          >
            <div className="flex gap-4 justify-between sm:flex-row flex-col">
              <Fieldset id="your name">Your name</Fieldset>
              <Fieldset id="college name">College Name</Fieldset>
            </div>

            <div className="flex gap-4 justify-between sm:flex-row flex-col">
              <Fieldset id="course year">Course Year</Fieldset>
              <Fieldset id="whatsapp number">Whatsapp Number</Fieldset>
            </div>

            <div className="flex gap-4 justify-between sm:flex-row flex-col">
              <Fieldset id="email id">Email ID</Fieldset>
              <Fieldset id="city">City</Fieldset>
            </div>

            <div className="relative">
              <Dropdown
                showDropdown={showDropdown}
                setShowDropdown={setShowDropdown}
                option={option}
                optionClickHandler={optionClickHandler}
                options={[
                  "Business Developer",
                  "Graphic Designer",
                  "Social Media Marketing",
                  "Social Media Management",
                  "Marketing Team",
                  "Web Developer",
                  "HR Manager",
                ]}
                topPosition="490px"
                height="360px"
              />
            </div>

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

export default Career;
