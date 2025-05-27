import { BannerModel, BannerVector } from "../assets/images/index";

const BannerSection = () => {
  const appDescription = [
    {
      title: "International Brands",
      description: "200+",
    },
    {
      title: "High-Quality Products",
      description: "2,000+",
    },
    {
      title: "Happy Customers",
      description: "30,000+",
    },
  ];
  return (
    <section className="bg-banner w-full overflow-clip h-[41rem] flex items-center justify-between">
      <div className="flex-1 flex flex-col items-start justify-center gap-8 ps-16">
        <div className="flex flex-col items-start justify-center gap-8">
          <h1 className="custom-banner text-6xl max-w-xl">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="custom-paragraph text-[16px] text-gray-700 max-w-2xl">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className="bg-black text-amber-400 py-2 px-12 rounded-3xl">
            Shop Now
          </button>
        </div>
        <div className="flex flex-wrap justify-start w-full gap-8">
          {appDescription.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-start justify-center gap-2 border-r-1 border-gray-500 pr-8 last:border-r-0"
            >
              <h3 className="text-4xl font-bold">{item.description}</h3>
              <p className="custom-paragraph text-[16px] text-gray-600">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="hidden flex-1 relative md:flex items-center justify-center">
        <img
          src={BannerVector}
          alt="Banner Image"
          className="object-cover transform absolute top-1/2 left-1/12 w-20"
        />
        <img
          src={BannerModel}
          alt="Banner Image"
          className="object-cover transform -translate-x-1/12 translate-y-1/12"
        />
        <img
          src={BannerVector}
          alt="Banner Image"
          className="object-cover transform absolute top-1/3 right-1/8 w-32"
        />
      </div>
    </section>
  );
};

export default BannerSection;
