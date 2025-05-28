import ShelfDisplay from "../ShelfDisplay";
import {
  Image1,
  Image2,
  Image3,
  Image4,
} from "../../assets/images/new-arrival/index";

const NewArrival = () => {
  const newArrivalItems = [
    {
      id: 1,
      name: "T-SHIRT WITH TAPE DETAILS",
      price: 120,
      rating: 4.5,
      img: Image1,
      isDiscounted: false,
      productUrl: "/products/t-shirt-with-tape-details",
    },
    {
      id: 2,
      name: "SKINNY FIT JEANS",
      price: 240,
      rating: 5.0,
      img: Image2,
      productUrl: "/products/skinny-fit-jeans",
      isDiscounted: true,
      discountPrice: 31.99,
      discountPercentage: 20,
      discountEndDate: new Date("2023-12-31"),
      discountStartDate: new Date("2023-11-01"),
    },
    {
      id: 3,
      name: "CHECKERED SHIRT",
      price: 180,
      rating: 3.5,
      img: Image3,
      productUrl: "/products/checkered-shirt",
      isDiscounted: false,
    },
    {
      id: 4,
      name: "SLEEVE STRIPED T-SHIRT",
      price: 130,
      rating: 4.0,
      img: Image4,
      productUrl: "/products/sleeve-striped-t-shirt",
      isDiscounted: true,
      discountPrice: 91,
      discountPercentage: 30,
      discountEndDate: new Date("2023-12-15"),
      discountStartDate: new Date("2023-11-15"),
    },
  ];

  const handleViewAllNewArrivals = () => {
    alert("View All does not have a specific page yet.");
  };

  return (
    <div className="w-full py-8">
      <ShelfDisplay
        title="New Arrivals"
        products={newArrivalItems}
        columns="4"
        showViewAll={true}
        onViewAll={handleViewAllNewArrivals}
        titleClassName="custom-banner"
        showRating={true}
        imageHeight="h-48 md:h-64 lg:h-80 xl:h-96"
      />
    </div>
  );
};

export default NewArrival;
