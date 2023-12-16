import files from "../../assets/images/illustration-1.svg";
const FilesSecure = () => {
  return (
    <div className="flex m-20">
      {/* <div>
        <img src={files} alt="" />
      </div> */}
      <div className="m-auto w-1/2 space-y-5">
        <h1 className="font-raleway font-[700] leading-[60px] text-[45px] w-full">
          All your files in one secure location, accessible anywhere.
        </h1>
        <p className="font-opensans font-[700]  text-[18px] w-4/5">
          Fylo stores your most important files in one secure location. Access
          them wherever you need, share and collaborate with friends, family,
          and co-workers.
        </p>
        <div className="flex gap-5 ">
          <div className="w-5/12 ">
            <input
              className="border-2 border-[#414148] rounded-md w-full h-12 pl-5"
              type="text"
              placeholder="Enter your email.."
            />
          </div>
          <div className="h-12 w-1/4 rounded-md text-[#F6F6FE] bg-[#3065F8]">
            <p className="px-[3.4rem] py-2.5"> Get Started</p>
          </div>
        </div>
      </div>
      <div>
        <img src={files} alt="" />
      </div>
    </div>
  );
};

export default FilesSecure;
