import BandFashion from "../components/BandFashion";
import Footer from "../components/Footer";
import BannerSection from "../components/main/BannerSection";
import BrowseByDressStyle from "../components/main/BrowseByDressStyle";
import CustomerTestimonials from "../components/main/CustomerTestimonials";
import NewArrival from "../components/main/NewArrivalSection";
import Newsletter from "../components/main/Newsletter";
import TopSelling from "../components/main/TopSellingSection";

const MainPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-auto bg-gray-100">
      <BannerSection />
      <BandFashion />
      <div className="w-full px-4 md:px-8 py-8">
        <NewArrival />
        <hr className="my-8 border-t border-gray-200 max-w-[90%] mx-auto" />
        <TopSelling />
        <BrowseByDressStyle />
        <CustomerTestimonials />
        <Newsletter />
      </div>

      <Footer />
    </div>
  );
};

export default MainPage;
