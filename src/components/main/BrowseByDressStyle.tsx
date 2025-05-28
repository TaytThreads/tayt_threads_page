import React from "react";

import {
  Image9,
  Image10,
  Image11,
  Image12,
} from "../../assets/images/new-arrival/index";

interface StyleCategory {
  id: number;
  name: string;
  image: string;
  path: string;
}

interface BrowseByDressStyleProps {
  title?: string;
  categories?: StyleCategory[];
  backgroundColor?: string;
  textColor?: string;
  className?: string;
}

const BrowseByDressStyle: React.FC<BrowseByDressStyleProps> = ({
  title = "BROWSE BY DRESS STYLE",
  backgroundColor = "#FFC633",
  textColor = "text-black",
  className = "",
  categories = [
    {
      id: 1,
      name: "Casual",
      image: Image9,
      path: "/categories/casual",
    },
    {
      id: 2,
      name: "Formal",
      image: Image10,
      path: "/categories/formal",
    },
    {
      id: 3,
      name: "Party",
      image: Image11,
      path: "/categories/party",
    },
    {
      id: 4,
      name: "Gym",
      image: Image12,
      path: "/categories/gym",
    },
  ],
}) => {
  const handleCategoryClick = (category: StyleCategory) => {
    alert(`Navigating to ${category.name} category at ${category.path}`);
  };

  return (
    <div
      className={`w-full p-8 md:p-14 container mx-auto bg-[#FFC633] rounded-4xl ${className}`}
    >
      <div className="mb-8 md:mb-14">
        <h2
          className={`custom-banner text-2xl   md:text-4xl font-bold ${textColor} text-center tracking-wide`}
        >
          {title}
        </h2>
      </div>

      {/* Grid Container */}
      <div className={`${backgroundColor} rounded-b-3xl`}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[35rem]">
          {/* Casual */}
          <div
            className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group transform hover:-translate-y-1"
            onClick={() => handleCategoryClick(categories[0])}
          >
            <img
              src={categories[0].image}
              alt={`${categories[0].name} Style`}
              className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-4 left-4">
              <h3 className="text-2xl font-bold text-black">
                {categories[0].name}
              </h3>
            </div>
          </div>

          {/* Formal */}
          <div
            className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group md:col-span-2 transform hover:-translate-y-1"
            onClick={() => handleCategoryClick(categories[1])}
          >
            <img
              src={categories[1].image}
              alt={`${categories[1].name} Style`}
              className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-4 left-4">
              <h3 className="text-2xl font-bold text-black">
                {categories[1].name}
              </h3>
            </div>
          </div>

          {/* Party */}
          <div
            className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group md:col-span-2 transform hover:-translate-y-1"
            onClick={() => handleCategoryClick(categories[2])}
          >
            <img
              src={categories[2].image}
              alt={`${categories[2].name} Style`}
              className="w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-4 left-4">
              <h3 className="text-2xl font-bold text-black">
                {categories[2].name}
              </h3>
            </div>
          </div>

          {/* Gym */}
          <div
            className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group  transform hover:-translate-y-1"
            onClick={() => handleCategoryClick(categories[3])}
          >
            <img
              src={categories[3].image}
              alt={`${categories[3].name} Style`}
              className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-4 left-4">
              <h3 className="text-2xl font-bold text-black">
                {categories[3].name}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseByDressStyle;
