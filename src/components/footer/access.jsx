const Access = () => {
  return (
    <div className="bg-[#585989] text-[#d3d3d3]">
      <div className="mx-20 py-20 w-8/12 gap-[20rem]  flex">
        <div className="space-y-5">
          <h1 className="text-[32px] font-raleway font-[700]">
            Get early access today
          </h1>
          <div className="w-[32rem]">
            <p className="font-opensans font-[700] w-full">
              It only takes a minute to sign up and our free starter tier is
              extremely generous. If you have any questions, our support team
              would be happy to help you.
            </p>
          </div>
        </div>
        <form>
          <div className="space-y-5 ">
            <div className="">
              <input
                className="shadow-2xl rounded-md w-[23rem] h-12 pl-5"
                type="email"
                placeholder="Enter your email.."
                required="required"
              />
            </div>
            <div className="h-12 w-2/3 shadow-2xl rounded-md text-[#F6F6FE] bg-[#3065F8]">
              <button type="submit" className="px-[3rem] py-2.5">
                Get Started For Free
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Access;
