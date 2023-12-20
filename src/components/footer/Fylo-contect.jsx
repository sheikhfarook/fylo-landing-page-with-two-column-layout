import logo from "../../assets/images/logo copy.svg";
import phone from "../../assets/images/icon-phone.svg";
import email from "../../assets/images/icon-email.svg";
import facebook from "../../assets/images/facebook-f.svg";
import twitter from "../../assets/images/instagram.svg";
import instagram from "../../assets/images/twitter.svg";

const FyloContect = () => {
  return (
    <div className="bg-[#070439] text-white ">
      <div
        className="flex flex-row justify-between lg:mr-[200px]  py-20 2xl:mx-[15rem] xl:mx-20
      max-sm:flex-col max-sm:ml-10 max-sm:space-y-14">
        {/* first */}
        <div className="space-y-5 font-opensans ">
          <div>
            <img className="max-sm:mb-10" src={logo} alt="" />
          </div>
          <div className="flex gap-5">
            <img className="h-4 my-auto" src={phone} alt="" />
            <p> Phone: +1-543-123-4567</p>
          </div>
          <div className="flex gap-5">
            <img className="h-4 my-auto" src={email} alt="" />
            <p>example@fylo.com</p>
          </div>
        </div>
        <div className=" font-opensans space-y-3">
          <p>About Us</p>
          <p>Jobs</p>
          <p>Press</p>
          <p>Blog</p>
        </div>
        <div className="font-opensans space-y-3">
          <p>Contact Us</p>
          <p>Terms</p>
          <p>Privacy</p>
        </div>
        {/* </div> */}
        {/* third */}
        <div className="flex gap-3 max-sm:m-auto max-sm:ml-24">
          {/*  ml-36 mt-[70px] lg:m-0 lg:justify-start lg:mt-0 md:m-auto md:justify-center md:mt-10 */}
          <div>
            <img
              className="border-2 p-2 h-9 w-9 rounded-full "
              src={facebook}
              alt=""
            />
          </div>
          <div>
            <img className="border-2 p-2 rounded-full" src={twitter} alt="" />
          </div>
          <div>
            <img className="border-2 p-2 rounded-full" src={instagram} alt="" />
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default FyloContect;
