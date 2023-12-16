import quotes from "../../assets/images/icon-quotes.svg";
import profile from "../../assets/images/avatar-testimonial.jpg";
import illustration from "../../assets/images/illustration-2.svg";
import arrow from "../../assets/images/icon-arrow.svg";
const Productive = () => {
  return (
    <div className="flex mt-[30rem] m-20 gap-16">
      <div className="m-auto w-11/12 space-y-5">
        <h2 className="font-raleway font-[700] leading-[60px] text-[38px] w-full">
          Stay productive, wherever you are
        </h2>
        <p className="font-opensans font-[700] text-[18px] w-11/12">
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p className="font-opensans font-[700] text-[17px] w-11/12">
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required!
        </p>
        <div className="flex gap-3 underline">
          <div>
            <p className="font-opensans font-[700] text-[18px] text-[#3C9F8F] ">
              See how Fylo works
            </p>
          </div>

          <img className="h-5 my-1.5" src={arrow} alt="" />
        </div>
        <div className="w-2/3 rounded-xl bg-[#f9f9fa] shadow-2xl">
          <div className="m-12  space-y-5 ">
            <img className="pt-12 w-4 " src={quotes} alt="" />
            <p className="font-raleway text-[15px] font-[700]">
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className="flex gap-5">
              <div className="">
                <img className="rounded-full h-10" src={profile} alt="" />
              </div>
              <div className="text-[16px] mb-10">
                <p className="font-raleway font-[700]">Kyle Burton</p>
                <p className="font-opensans text-[12px]">
                  Founder & CEO, Huddle
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={illustration} alt="" />
      </div>
    </div>
  );
};

export default Productive;
