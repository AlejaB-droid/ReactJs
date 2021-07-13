import React, { useState } from "react";

export default function AddColorForm({ onNewColor = (params) => params }) {
  //const txtTitle = useRef();
  //const [title, setTitle] = useState("");
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");

  const submit = (e) => {
    e.preventDefault();
    //let title = txtTitle.current.value;
    //txtTitle.current.value = "blue";
    //onNewColor(title);
    onNewColor(titleProps.value, colorProps.value);
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
      <input
        {...colorProps}
        type="color"
        required
      ></input>
      <button>Add</button>
    </form>
  );
  /* <input
        onChange={(event) => setTitle(event.target.value)}
        type="text"
        value={title}
        placeholder="Nombre del color"
        required
      ></input> */
}

export const useInput = initialValue => {
    const [value, setValue] = useState(initialValue);

    return[
        {value, onChange: e=> setValue(e.target.value)},
        () => setValue(initialValue)
    ];
};
