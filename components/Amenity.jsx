import Image from "next/image";

const Amenity = ({ icon, text }) => {
  return (
    <div className="group border border-[#BEBEBE] rounded-full flex gap-2 items-center p-2 w-max hover:bg-primary">
      <Image src={icon} alt={text} width={14} height={14} />
      <span className="text-[#292D32] sm:text-[11px] text-[8px] leading-[10px]">
        {text}
      </span>
    </div>
  );
};

export default Amenity;
