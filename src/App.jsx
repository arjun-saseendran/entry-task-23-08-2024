import React, { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((product) => {
        setProducts(product);
        console.log(product);
      });
  }, []);

  return (
    <>
     
    </>
  );
}

export default App;
