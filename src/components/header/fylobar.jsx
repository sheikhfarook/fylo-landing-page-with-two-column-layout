import fylo from "../../assets/images/logo.svg";
const FyloBar = () => {
  return (
    <div
      className="flex md:justify-between mx-20 my-14 
    max-sm:w-[20rem] max-sm:gap-20 max-sm:mx-auto">
      <div>
        <img className="max-sm:w-[5rem]" src={fylo} alt="" />
      </div>
      <div
        className="flex gap-12 font-raleway max-sm:gap-5 
      max-sm:text-[13px] max-sm:w-[3rem]">
        <div> Features</div>
        <div>Team</div>
        <div>
          <p className="max-sm:w-[3rem]">Sign In</p>
        </div>
      </div>
    </div>
  );
};

export default FyloBar;
