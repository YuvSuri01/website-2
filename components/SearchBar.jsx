import Image from "next/image";

const SearchBar = () => {
  return (
    <div className="shadow-[0px_30px_30px_0px_#151F3008] border border-[#E8E8E8] rounded-[10px] p-4 w-[614px] flex items-center cursor-pointer divide-x mx-auto">
      <div className="flex gap-12 items-center flex-[0_1_45%] justify-between px-4">
        <div>
          <div className="text-[15px] font-medium leading-[21px] text-[#232728]">
            Choose Property Type
          </div>
          <span className="text-[13px] leading-[16px] text-[#999999]">
            Select your living space
          </span>
        </div>
        <Image
          src="/assets/arrow-down.svg"
          alt="arrow-down"
          width={13}
          height={9}
        />
      </div>

      <form className="flex gap-2 flex-[0_1_55%] justify-between px-4">
        <fieldset className="appearance-none flex flex-col flex-[1]">
          <label className="text-[15px] font-medium leading-[21px] text-[#232728]">
            Find in and around…
          </label>
          <input
            type="text"
            placeholder="Enter College/Office/Locality/City"
            className="focus:outline-none placeholder:text-[13px] placeholder:leading-[16px] placeholder:text-[#999999] text-[13px] text-[#232728]"
          />
        </fieldset>
        <button
          type="submit"
          className="border-0 p-2 bg-primary rounded-[10px] focus:outline-none w-[50px] h-[50px] flex justify-center items-center"
        >
          <Image
            src="/assets/search-icon.svg"
            alt="search-icon"
            width={20}
            height={20}
          />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
