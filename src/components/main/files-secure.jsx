import files from "../../assets/images/illustration-1.svg";
const FilesSecure = () => {
  return (
    <div className="flex m-20">
      <div className="m-auto w-11/12 space-y-5">
        <h1 className="font-raleway font-[700] leading-[60px] text-[40px] w-full">
          All your files in one secure location, accessible anywhere.
        </h1>
        <p className="font-opensans font-[700]  text-[18px] w-11/12">
          Fylo stores your most important files in one secure location. Access
          them wherever you need, share and collaborate with friends, family,
          and co-workers.
        </p>
        <form>
          <div className="flex gap-5 ">
            <div className="w-3/6 ">
              <input
                className="border-2 border-[#414148] shadow-2xl rounded-md w-full h-12 pl-5"
                type="email"
                placeholder="Enter your email.."
                required="required"
              />
            </div>
            <div className="h-12 w-1/4 shadow-2xl rounded-md text-[#F6F6FE] bg-[#3065F8]">
              <button type="submit" className="px-[2.5rem] py-2.5">
                Get Started
              </button>
            </div>
          </div>
        </form>
      </div>
      <div>
        <img src={files} alt="" />
      </div>
    </div>
  );
};

export default FilesSecure;
