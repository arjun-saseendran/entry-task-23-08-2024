import React, { useState, useEffect } from "react";

function Main() {
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
      <div className="container">
        <div className="row mx-auto mt-5">
          {products.map((product, index) => {
            return (
              <div key={index} className=" col-12 col-sm-6 col-md-4 col-lg-3">
                <div
                  className="card overfolw-hidden mb-4 p-2"
                  style={{ width: "18rem", height: "30rem" }}
                >
                  <img
                    src={product.image}
                    className="card-img-top object-fit-contain"
                    style={{ height: "200px" }}
                    alt="product-image"
                  />
                  <div
                    className="card-body"
                    style={{ height: "25rem", overflow: "hidden" }}
                  >
                    <h5
                      className="card-title text-secondary"
                      style={{ height: "3rem", overflow: "hidden" }}
                    >
                      {product.title}
                    </h5>

                    <p
                      className="card-text overflow:hidden text-secondary"
                      style={{ height: "6rem", overflow: "hidden" }}
                    >
                      {product.description}
                    </p>
                    <h5 className="card-title text-secondary">
                      ${product.price}
                    </h5>
                    <a href="#" className="btn btn-secondary">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Main;
