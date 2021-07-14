import "./App.css";
import React, { useState, useEffect, useMemo } from "react";

const useAnyKeyToRender = () => {
  const [, forceRender] = useState();

  useEffect(() => {
    window.addEventListener("keydown", forceRender);
  }, []);
};

function WordCount({ children }) {
  useAnyKeyToRender();
  const words = useMemo(() => children.split(" "), [children]);

  useEffect(() => console.log("Se ejecuta useEffect"), [words]);

  return (
    <>
      <p>{children}</p>
      <p>
        <strong>{words.length}-words</strong>
      </p>
    </>
  );
}

export default function App() {
  return <WordCount>un texto con espacios</WordCount>;
}
