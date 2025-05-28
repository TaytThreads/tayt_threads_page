import React, { useState } from "react";
import { CheckIcon, ChevronLeft, ChevronRight } from "../../assets/icons/index";
import { StarRating } from "../StarRating";

interface Testimonial {
  id: number;
  name: string;
  rating: number;
  review: string;
  verified: boolean;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah M.",
    rating: 5,
    review:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    verified: true,
  },
  {
    id: 2,
    name: "Alex K.",
    rating: 5,
    review:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    verified: true,
  },
  {
    id: 3,
    name: "James L.",
    rating: 4,
    review:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    verified: true,
  },
  {
    id: 4,
    name: "Monica R.",
    rating: 4.5,
    review:
      "The customer service at Shop.co is exceptional. They go above and beyond to ensure customer satisfaction, and their attention to detail in packaging and delivery is remarkable.",
    verified: true,
  },
];

const CustomerTestimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setTimeout(() => setIsAnimating(false), 300);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <div className="w-full container mx-auto mt-20 pb-36">
      <div className="mx-auto">
        <div className="flex items-center justify-between mb-10">
          <h2 className="custom-banner text-4xl md:text-5xl font-bold text-black">
            OUR HAPPY CUSTOMERS
          </h2>
          <div className="flex gap-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors duration-200 hover:cursor-pointer"
              disabled={isAnimating}
            >
              <img src={ChevronLeft} alt="Previous" width={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors duration-200 hover:cursor-pointer"
              disabled={isAnimating}
            >
              <img src={ChevronRight} alt="Next" width={24} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getVisibleTestimonials().map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${currentIndex}`}
              className={`bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 ${
                index % 2 != 0 ? " border-yellow-200" : ""
              } ${isAnimating ? "opacity-70" : "opacity-100"}`}
            >
              <StarRating rating={testimonial.rating} />

              <div className="flex items-center gap-2 mb-4">
                <h3 className="font-semibold text-lg text-black">
                  {testimonial.name}
                </h3>
                {testimonial.verified && (
                  <img src={CheckIcon} alt="Verified" width={20} />
                )}
              </div>

              <p className="text-gray-700 leading-relaxed text-base">
                "{testimonial.review}"
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isAnimating) {
                  setIsAnimating(true);
                  setCurrentIndex(index);
                  setTimeout(() => setIsAnimating(false), 300);
                }
              }}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentIndex ? "bg-black" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerTestimonials;
