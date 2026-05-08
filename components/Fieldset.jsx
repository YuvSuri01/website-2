const Fieldset = ({ id, field, children, classes }) => {
  return (
    <fieldset className={classes}>
      <label
        htmlFor={id}
        className="sm:text-lg text-sm block mb-1 text-[#555] font-medium ml-2"
      >
        {children}
      </label>
      <input
        type="text"
        className="block text-[#333] w-full focus:outline-none border-2 rounded-[10px] h-[50px] p-4 focus:border-primary"
        id={id}
      />
    </fieldset>
  );
};

export default Fieldset;
