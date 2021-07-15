import React, { useState } from "react";
import Star from "./Star";
import { createArray } from "./utils";

export default function StarRating({ totalStars = 5,  selectedStar= 0, onRate = index => index}) {
  //const [ setSelectedStar] = useState(3);

  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={i < selectedStar}
          onSelect={() => onRate(i + 1)}
        />
      ))}
      <p>
        {selectedStar} out of {totalStars} stars
      </p>
    </>
  );
}