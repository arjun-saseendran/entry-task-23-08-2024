import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((product) => {setProducts(product)
        console.log(product);
        
      });
  }, []);

  return (
    <>
    <div className="row container">
      {products.map((product, index) => {
        return (
          
          <div className="container row">
<div col-12 col-sm-6 col-md-4 col-lg-3>
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text"></p>
    <a href="#" class="btn btn-primary">Add to cart</a>
  </div>
</div>



</div>




            </div>
          
        )
      })}
          </div>
      
     
    </>
  );
}

export default App;
