import React from "react";

const Header = () => {
  return (
    <>
      <header className="bg-primary py-2 mb-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col">
              <img
                src="https://developers.giphy.com/branch/master/static/header-logo-0fec0225d189bc0eae27dac3e3770582.gif"
                alt="GifExpertApp"
                className="img-fluid"
              />
            </div>

            <div className="col-8">
              <h1 className="m-0 text-white text-end">gifExpertApp</h1>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
