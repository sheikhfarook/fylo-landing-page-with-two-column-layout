import quotes from "../../assets/images/icon-quotes.svg";
import profile from "../../assets/images/avatar-testimonial.jpg";
import illustration from "../../assets/images/illustration-2.svg";
import arrow from "../../assets/images/icon-arrow.svg";
const Productive = () => {
  return (
    <div className="bgimg">
      <div
        className="flex  gap-16 
        2xl:mx-[15rem]
        xl:flex-row xl:mt-[20rem] xl:text-left xl:m-20
        md:flex-col-reverse md:mt-[10rem] md:text-center 
        max-sm:flex-col-reverse max-sm:w-[23rem] max-sm:h-[60rem] max-sm:mx-auto max-sm:mt-[10rem]">
        <div className="m-auto w-11/12 space-y-5 ">
          <div className="space-y-5 max-sm:text-center ">
            <h2
              className="font-raleway font-[700] leading-[60px] text-[38px] w-full 
              md:text-[34px] 
              max-sm:w-[16rem] max-sm:text-[15px]  max-sm:mx-auto">
              Stay productive, wherever you are
            </h2>
            <p
              className="font-opensans font-[400] text-[18px] w-11/12
              xl:m-0
              md:m-auto
            max-sm:text-[14px] max-sm:w-[20rem]  max-sm:mx-auto">
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>
            <p
              className="font-opensans font-[400] text-[17px] w-11/12
              xl:m-0
              md:m-auto 
             max-sm:text-[14px] max-sm:w-[20rem]  max-sm:mx-auto">
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required!
            </p>
            <div
              className="xl:m-0
            lg:ml-[19rem]
            md:ml-[11.5rem]">
              <div className="flex gap-3   ">
                <p
                  className="font-opensans font-[400] text-[18px]
                  
                 max-sm:w-[20rem] max-sm:text-[14px] text-[#3C9F8F] ">
                  See how Fylo works
                </p>
                <img
                  className="h-5 my-1.5
                   max-sm:relative max-sm:right-[6rem] max-sm:my-auto"
                  src={arrow}
                  alt=""
                />
              </div>
              <div
                className="w-[10.225rem] h-[0.178rem]
               max-sm:m-auto max-sm:mt-2 bg-[#3DA08F]"></div>
            </div>
          </div>
          <div
            className="w-2/3 rounded-xl bg-[#f9f9fa] shadow-2xl
            xl:m-0
            lg:text-left
            md:m-auto 
            max-sm:m-auto max-sm:w-[18rem] ">
            <div
              className=" space-y-5 lg:m-12 
            md:m-4
             max-sm:m-5 ">
              <img className="pt-12 w-4 " src={quotes} alt="" />
              <p className="font-raleway text-[18px] font-[400] max-sm:text-[12.9px]  max-sm:w-[16rem]">
                Fylo has improved our team productivity by an order of
                magnitude. Since making the switch our team has become a
                well-oiled collaboration machine.
              </p>
              <div className="flex gap-5">
                <div className="">
                  <img className="rounded-full h-10" src={profile} alt="" />
                </div>
                <div className="text-[16px] mb-10">
                  <p className="font-raleway font-[700]">Kyle Burton</p>
                  <p className="font-opensans text-[12px] max-sm:w-full max-sm:text-[10px]">
                    Founder & CEO, Huddle
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            className="xl:my-[10rem] max-sm:relative max-sm:top-12"
            src={illustration}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Productive;
