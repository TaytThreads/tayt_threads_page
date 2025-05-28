import {
  Image5,
  Image6,
  Image7,
  Image8,
} from "../../assets/images/new-arrival/index";
import ShelfDisplay from "../ShelfDisplay";

const TopSelling = () => {
  const topSellingItems = [
    {
      id: 1,
      name: "T-SHIRT WITH TAPE DETAILS",
      price: 232,
      rating: 5,
      img: Image5,
      productUrl: "/products/t-shirt-with-tape-details",
      isDiscounted: true,
      discountPrice: 212,
      discountPercentage: 20,
      discountEndDate: new Date("2023-12-31"),
      discountStartDate: new Date("2023-11-01"),
    },
    {
      id: 2,
      name: "SKINNY FIT JEANS",
      price: 145.99,
      rating: 5.0,
      img: Image6,
      productUrl: "/products/skinny-fit-jeans",
      isDiscounted: false,
    },
    {
      id: 3,
      name: "CHECKERED SHIRT",
      price: 80.99,
      rating: 3.5,
      img: Image7,
      productUrl: "/products/checkered-shirt",
      isDiscounted: false,
    },
    {
      id: 4,
      name: "SLEEVE STRIPED T-SHIRT",
      price: 210.99,
      rating: 4.0,
      img: Image8,
      productUrl: "/products/sleeve-striped-t-shirt",
      isDiscounted: false,
    },
  ];

  const handleViewAllTopSelling = () => {
    alert("View All does not have a specific page yet.");
  };
  return (
    <div>
      <ShelfDisplay
        title="Top Selling"
        products={topSellingItems}
        columns="4"
        showViewAll={true}
        onViewAll={handleViewAllTopSelling}
        titleClassName="custom-banner"
        showRating={true}
        imageHeight="h-48 md:h-64 lg:h-80 xl:h-96"
      />
    </div>
  );
};

export default TopSelling;
