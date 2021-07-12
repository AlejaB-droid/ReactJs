  // import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import StarRating from "./StarRating";
import ColorList from "./ColorList";
import colorData from "./color-data.json";

function App() {
  const [colors, setColors] = useState(colorData);

  return (
    <div>
    <ColorList 
    colors = {colors} 
    onRemoveColor = {id => {
        const newColors = colors.filter(color => color.id !== id);
        setColors(newColors);
    }}
    onRateColor = {(id, rating) => {
      const newColors = colors.map(color => 
        color.id === id ? { ...color, rating} : color
        );
      setColors(newColors);
    }}
    />
    </div>
  );
}

export default App;