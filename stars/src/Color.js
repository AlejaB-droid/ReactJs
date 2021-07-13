import React from "react";
import { FaTrash } from "react-icons/fa";
import { useColors } from "./ColorProvider";
import StarRating from "./StarRating";

export default function Color({ id, title, color, rating }) {
  const { updateRateColor, removeColor } = useColors();

  return (
    <section>
      <h1>{title}</h1>
      <button onClick={() => removeColor(id)}>
        <FaTrash />
      </button>
      <div style={{ height: 50, backgroundColor: color }}></div>
      <StarRating
        selectedStar={rating}
        onRate={rating => updateRateColor(id, rating)}
      />
    </section>
  );
}
