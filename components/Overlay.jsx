const Overlay = ({ clickHandler, children }) => {
  return (
    <div
      className="fixed top-0 left-0 right-0 h-[100vh] w-full z-[70] backdrop-blur flex justify-center items-center"
      onClick={clickHandler}
    >
      {children}
    </div>
  );
};

export default Overlay;
