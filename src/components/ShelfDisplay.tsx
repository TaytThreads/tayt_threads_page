import React from "react";
import { StarRating } from "./StarRating";

interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  img: string;
  productUrl: string;
  isDiscounted?: boolean;
  discountPrice?: number;
  discountPercentage?: number;
  discountEndDate?: Date;
  discountStartDate?: Date;
}

interface ShelfDisplayProps {
  title: string;
  products: Product[];
  columns?: "1" | "2" | "3" | "4" | "5" | "6";
  showViewAll?: boolean;
  onViewAll?: () => void;
  containerClassName?: string;
  productClassName?: string;
  titleClassName?: string;
  showRating?: boolean;
  imageHeight?: string;
}

const ShelfDisplay: React.FC<ShelfDisplayProps> = ({
  title,
  products,
  columns = "4",
  showViewAll = true,
  onViewAll,
  containerClassName = "",
  productClassName = "",
  titleClassName = "",
  showRating = true,
  imageHeight = "h-48",
}) => {
  const gridCols = {
    "1": "grid-cols-1",
    "2": "grid-cols-1 md:grid-cols-2",
    "3": "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    "4": "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
    "5": "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5",
    "6": "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6",
  };

  const handleViewAll = () => {
    if (onViewAll) {
      onViewAll();
    } else {
      console.log(`View all ${title} clicked`);
    }
  };

  return (
    <div className={`container mx-auto px-4 ${containerClassName}`}>
      <h2
        className={`text-2xl md:text-5xl font-bold text-center mb-8 md:mb-16 ${titleClassName}`}
      >
        {title}
      </h2>

      <div className={`grid ${gridCols[columns]} gap-6`}>
        {products.map((product) => (
          <div
            key={product.id}
            className={`rounded-xl flex flex-col bg-white shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 hover:cursor-pointer ${productClassName}`}
            // TODO: Replace with actual navigation logic
            onClick={() => alert(`Navigating to ${product.name} details page`)}
          >
            <div className="relative">
              <img
                src={product.img}
                alt={product.name}
                className={`w-full ${imageHeight} object-cover`}
              />
              {product.isDiscounted && product.discountPercentage && (
                <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                  -{product.discountPercentage}%
                </div>
              )}
            </div>

            <div className="p-4 flex-1 flex flex-col">
              <h3 className="text-lg font-extrabold mb-2 flex-1">
                {product.name}
              </h3>

              {showRating && (
                <div className="flex items-center gap-2 mb-3">
                  <StarRating rating={product.rating} />
                  <span className="text-sm text-gray-600">
                    {product.rating}/5
                  </span>
                </div>
              )}

              <div className="flex items-center gap-2 mt-auto">
                {product.isDiscounted && product.discountPrice ? (
                  <>
                    <span className="text-lg font-bold text-green-600">
                      ${product.discountPrice.toFixed(2)}
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      ${product.price.toFixed(2)}
                    </span>
                  </>
                ) : (
                  <span className="text-lg font-bold">
                    ${product.price.toFixed(2)}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {showViewAll && (
        <div className="text-center my-16">
          <button
            onClick={handleViewAll}
            className="px-6 py-4 bg-yellow-400 hover:bg-yellow-500 text-black rounded-4xl border border-black transition-colors duration-300 font-medium hover:cursor-pointer"
          >
            View All {title}
          </button>
        </div>
      )}
    </div>
  );
};

export default ShelfDisplay;
