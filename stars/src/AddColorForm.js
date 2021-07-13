import React, { useState } from "react";
import { useColors } from "./ColorProvider";

export default function AddColorForm() {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#ffffff");
  const { addColor } = useColors();

  const submit = (e) => {
    e.preventDefault();
    addColor(titleProps.value, colorProps.value);
    resetTitle("");
    resetColor("");
  };

  return (
    <form onSubmit={submit}>
      <input
        {...titleProps}
        type="text"
        placeholder="Nombre del color"
        required
      ></input>
      <input {...colorProps} type="color" required></input>
      <button>Add</button>
    </form>
  );
}

export const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  return [
    { value, onChange: (e) => setValue(e.target.value) },
    () => setValue(initialValue),
  ];
};

