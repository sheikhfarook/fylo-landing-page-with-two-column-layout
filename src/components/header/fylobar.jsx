import fylo from "../../assets/images/logo.svg";
const FyloBar = () => {
  return (
    <div className="flex justify-between mx-20 my-14">
      <div>
        <img src={fylo} alt="" />
      </div>
      <div className="flex gap-12 font-raleway">
        <div> Features</div>
        <div>Team</div>
        <div>Sign In</div>
      </div>
    </div>
  );
};

export default FyloBar;
