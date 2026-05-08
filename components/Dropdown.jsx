import Image from "next/image";

const Dropdown = ({
  showDropdown,
  setShowDropdown,
  option,
  optionClickHandler,
  options,
  topPosition,
  height,
}) => {
  return (
    <>
      <div
        className="flex justify-between items-center border-2 rounded-[10px] h-[50px] p-4 py-6 cursor-pointer my-2 bg-white"
        onClick={() => setShowDropdown((prev) => !prev)}
      >
        <p className="text-[#555] sm:text-base text-sm">{option}</p>
        <Image
          src="/assets/arrow-down.svg"
          alt="dropdown"
          width={12}
          height={12}
        />
      </div>
      <div
        className={`absolute ${
          topPosition ? `top-[${topPosition}]` : "top-[390px]"
        } left-0 z-[10] rounded-[5px] overflow-hidden shadow-[0_0_5px_rgba(0,0,0,0.1)] bg-white w-full flex flex-col transition-all ${
          // showDropdown ? "h-[161px]" : "h-0"
          showDropdown ? `h-[${height}]` : "h-0"
        }`}
        onClick={optionClickHandler}
      >
        {options.map((el, index) => (
          <p
            className="sm:text-base text-sm text-[#555] font-medium hover:bg-[#d5f4f7] px-6 py-4 cursor-pointer"
            data-name={el}
            key={index}
          >
            {el}
          </p>
        ))}
      </div>
    </>
  );
};

export default Dropdown;
