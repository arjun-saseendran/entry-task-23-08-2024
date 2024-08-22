import React from 'react'

function Main() {
  return (
    <>
     <div className="container row p-5">
        {products.map((product, index) => {
          return (
            <div key={index} className=" col-12 col-sm-6 col-md-4 col-lg-3 mt-3">
              <div className="card overfolw-hidden" style={{ width: "18rem", height:'30rem'}}>
                <img
                  src={product.image}
                  className="card-img-top object-fit-contain p-3 "
                  style={{height: '200px'}} alt="product-image"
                />
                <div className="card-body" style={{height:'25rem', overflow:'hidden'}}>
                  <h5 className="card-title text-white" style={{height:'3rem', overflow: 'hidden'}}>{product.title}</h5>

                  <p className="card-text overflow:hidden" style={{height:'6rem', overflow: 'hidden'}}>{product.description}</p>
                  <h5 className="card-title text-white">${product.price}</h5>
                  <a href="#" className="btn btn-secondary">
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  )
}

export default Main