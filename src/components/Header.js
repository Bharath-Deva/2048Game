import React from "react";

const Header = ({ score, bestScore }) => {
  return (
    <div className="App-header container-fluid">
      <div className="row justify-content-center">
        <div className="col col-lg-2 col-md-2 col-sm-2">
          <h5 className="btn btn-primary score-card">Score : {score}</h5>
        </div>
        <div className="col-md-auto col-sm-2"></div>
        <div className="col col-lg-2 col-md-2 col-sm-2">
          <h5 className="btn btn-primary new-game-btn" >Best Score : {bestScore}</h5>
        </div>
      </div>
    </div>
  );
};

export default Header;
