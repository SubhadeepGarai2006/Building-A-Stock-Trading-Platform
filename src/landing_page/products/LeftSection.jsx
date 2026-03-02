import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container py-5">
      <div className="row align-items-center">

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

          <div className="mt-3">
            {tryDemo && (
              <a href={tryDemo} className="text-primary text-decoration-none me-4">
                Try Demo
              </a>
            )}

            {learnMore && (
              <a href={learnMore} className="text-primary text-decoration-none">
                Learn More
              </a>
            )}
          </div>

          {/* APP BADGES */}
          <div className="mt-4 d-flex justify-content-center justify-content-lg-start gap-3 flex-wrap">
            {googlePlay && (
              <a href={googlePlay}>
                <img src="media/googlePlayBadge.svg" alt="Google Play" height="45" />
              </a>
            )}

            {appStore && (
              <a href={appStore}>
                <img src="media/appstoreBadge.svg" alt="App Store" height="45" />
              </a>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export default LeftSection;