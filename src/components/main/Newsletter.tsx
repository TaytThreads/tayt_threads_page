import { MailIcon } from "../../assets/icons/index";

const Newsletter = () => {
  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 min-w-xs md:min-w-lg lg:min-w-7xl bg-[#FFC633] p-10 rounded-2xl -translate-y-1/3">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        <div>
          <h2 className="custom-banner text-2xl md:text-3xl lg:text-4xl text-white max-w-lg">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h2>
        </div>
        <div>
          <form
            onSubmit={() => alert("Under development")}
            className="flex flex-col items-start gap-4 min-w-[10rem] md:min-w-[20rem] lg:min-w-[30rem]"
          >
            <div className="w-full flex items-center bg-white rounded-full overflow-hidden">
              <img src={MailIcon} alt="Mail Icon" className="w-6 h-6 ml-5" />
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 py-4 px-4 outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-white text-black py-4 px-4 rounded-full"
            >
              Subscribe to Newsletter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
