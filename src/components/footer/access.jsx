const Access = () => {
  // make a function to count the number

  return (
    <div className="bg-[#585989] text-[#d3d3d3]">
      <div
        className="md:mx-20 py-20 flex flex-row xl:w-8/12  
        2xl:mx-[15rem]
        xl:mx-20
      max-sm:flex-col  ">
        <div className="space-y-5 max-sm:m-auto max-sm:text-center">
          <h1
            className="lg:text-[32px] font-raleway font-[700]
          max-sm:w-[12.1875rem] max-sm:m-auto max-sm:text-[18px]">
            Get early access today
          </h1>
          <div className="xl:w-[32rem] ">
            <p
              className="font-opensans font-[400] w-full
            max-sm:w-[17.5rem] ">
              It only takes a minute to sign up and our free starter tier is
              extremely generous. If you have any questions, our support team
              would be happy to help you.
            </p>
          </div>
        </div>
        <form>
          <div className="space-y-5 ml-14 max-sm:mt-5 max-sm:ml-[4rem] ">
            <div className="">
              <input
                className=" rounded-sm w-[23rem] h-12 pl-5
                max-sm:w-[15rem]  "
                type="email"
                placeholder="email@example.com"
                required="required"
              />
            </div>
            <div
              className="h-12 w-[14rem] rounded-sm font-raleway font-[700] text-[#F6F6FE] bg-[#3065F8]
            max-sm:w-[15rem] ">
              <button
                type="submit"
                className="px-[2rem] w-full   py-2.5 max-sm:px-[42px] max-sm:py-3.5 ">
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
