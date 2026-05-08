"use client";

import Image from "next/image";
import { useState } from "react";
import { Button, Fieldset, Overlay } from "@/components";

const Page = () => {
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

  return (
    <>
      <div className="mb-4 flex justify-center items-center sm:px-0 px-8">
        <p className="sm:text-lg text-base text-[#000] text-center sm:leading-[36px] leading-[30px] sm:w-1/3 w-full">
          Help a friend to find PG without any brokerage, but yeah we will pay
          you for this Get Paid on Every Booking confirmation from your side.
        </p>
      </div>

      <div className="max-w-[600px] sm:mx-auto sm:p-10 p-6 m-8 rounded-[10px] shadow-[0_0_5px_rgba(0,0,0,0.3)] bg-white">
        <p className="text-center leading-[30px] mb-8 text-[#777]">
          Please fill this form, you will be added in a Whatsapp Group where you
          can transfer your leads.
        </p>

        <form className="flex flex-col gap-6" onSubmit={formSubmitHandler}>
          <Fieldset id="your name">Your Name</Fieldset>
          <Fieldset id="college name">College Name</Fieldset>
          <Fieldset id="whatsapp number">Whatsapp Number</Fieldset>
          <Fieldset id="contact number">Calling Number</Fieldset>
          <Fieldset id="instagram">Instagram Username</Fieldset>
          <div className="flex justify-center p-4">
            <Button clickHandler={() => {}}>Submit</Button>
          </div>
        </form>
      </div>

      {showPopup && (
        <>
          <Overlay clickHandler={closePopup}>
            <p className="sm:p-16 p-8 shadow-[0_0_5px_rgba(0,0,0,0.3)] rounded-[10px] text-center  bg-white z-[80] animate-scaleUp">
              Thank you for filling the form. <br /> Your response has been
              recorded. <br /> Our team will add you in a group shortly.
            </p>
          </Overlay>
        </>
      )}
    </>
  );
};

export default Page;
