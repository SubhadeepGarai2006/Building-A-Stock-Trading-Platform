import React from "react";

function RightSection({ imageURL, productName, productDesription, learnMore }) {
  return (
    <div className="container py-5">
      <div className="row align-items-center flex-lg-row-reverse">

        {/* IMAGE */}
        <div className="col-lg-6 col-md-12 text-center mb-4 mb-lg-0">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid product-img"
          />
        </div>

        {/* TEXT */}
        <div className="col-lg-6 col-md-12 text-center text-lg-start px-lg-5">
          <h1 className="fw-bold">{productName}</h1>
          <p className="text-muted">{productDesription}</p>

          {learnMore && (
            <a href={learnMore} className="text-primary text-decoration-none">
              Learn More
            </a>
          )}
        </div>

      </div>
    </div>
  );
}

export default RightSection;