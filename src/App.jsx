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
      <div className="row container">
        {products.map((product, index) => {
          return (
            <div key={index} className=" col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="card" style={{width: 18 rem}}>
                <img src={product.image} className="card-img-top" alt="product-image" />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <a href="#" className="btn btn-primary">
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
