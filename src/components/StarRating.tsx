import React from "react";
import { StarFull, StarHalf, StarEmpty } from "../assets/icons/index";

interface StarRatingProps {
  rating: number;
  maxStars?: number;
  size?: string | number;
  color?: string;
  className?: string;
  showHalfStars?: boolean;
}

export const StarRating: React.FC<StarRatingProps> = ({
  rating,
  maxStars = 5,
  size = 18,
  color,
  className = "",
  showHalfStars = true,
}) => {
  const clampedRating = Math.max(0, Math.min(rating, maxStars));
  const fullStars = Math.floor(clampedRating);
  const hasHalfStar = showHalfStars && clampedRating % 1 >= 0.5;
  const emptyStars = maxStars - fullStars - (hasHalfStar ? 1 : 0);

  const starStyle = {
    ...(size && { width: size, height: size }),
    ...(color && { color }),
  };

  return (
    <div
      className={`flex items-center ${className}`}
      role="img"
      aria-label={`${rating} out of ${maxStars} stars`}
    >
      {Array.from({ length: fullStars }, (_, i) => (
        <img
          key={`full-${i}`}
          style={starStyle}
          src={StarFull}
          alt="Full Star"
        />
      ))}

      {hasHalfStar && (
        <img key="half" style={starStyle} src={StarHalf} alt="Half Star" />
      )}

      {Array.from({ length: emptyStars }, (_, i) => (
        <img
          key={`empty-${i}`}
          style={starStyle}
          src={StarEmpty}
          alt="Empty Star"
        />
      ))}
    </div>
  );
};
