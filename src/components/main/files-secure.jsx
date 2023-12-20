import files from "../../assets/images/illustration-1.svg";
const FilesSecure = () => {
  return (
    <div
      className="flex 2xl:mx-[15rem] xl:flex-row xl:text-left lg:m-20  md:flex-col-reverse md:text-center
     md:mt-20 md:m-20 max-sm:flex-col-reverse max-sm:mx-5">
      <div className="m-auto w-11/12 space-y-5 max-sm:text-center">
        <h1
          className="font-raleway font-[700] xl:text-[40px] w-full xl:leading-[60px] lg:text-[24px] lg:leading-[38px] 
         md:text-[38px] max-sm:w-[20rem] max-sm:text-[25px]">
          All your files in one secure location, accessible anywhere.
        </h1>
        <p
          className="font-opensans font-[400] text-[18px] w-11/12 xl:m-0 lg:m-auto md:mx-auto
        max-sm:w-[18.5rem] max-sm:text-[14px]">
          Fylo stores your most important files in one secure location. Access
          them wherever you need, share and collaborate with friends, family,
          and co-workers.
        </p>
        <form>
          <div className="flex gap-5 xl:m-0 lg:ml-24 md:ml-14 max-sm:flex-col ">
            <div className="w-3/6 ">
              <input
                className="border-2 border-[#414148] shadow-2xl rounded-md w-full h-12 pl-5
                max-sm:w-[19rem]"
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                type="email"
                placeholder="Enter your email.."
                required="required"
              />
            </div>
            <div className="h-12 w-[12rem] font-[700] shadow-2xl rounded-md text-[#F6F6FE] bg-[#3065F8] max-sm:w-[19rem]">
              <button type="submit" className="px-[2.5rem] py-2.5 ">
                Get Started
              </button>
            </div>
          </div>
        </form>
      </div>
      <div>
        <img className="max-sm:w-[20rem]" src={files} alt="" />
      </div>
    </div>
  );
};

export default FilesSecure;
