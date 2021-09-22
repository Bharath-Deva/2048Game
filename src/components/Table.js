import React from "react";

const Table = ({ grid }) => {
  return (
    <div className="container-fluid">
      <div className="d-flex row justify-content-center">
        <div className="block col-lg-1 col-md-2 col-sm-2">
          <p className="blockElement">{grid[0][0]}</p>
        </div>
        <div className="block col-lg-1 col-md-2 col-sm-2">
          <p className="blockElement">{grid[0][1]}</p>
        </div>
        <div className="block col-lg-1 col-md-2 col-sm-2">
          <p className="blockElement">{grid[0][2]}</p>
        </div>
        <div className="block col-lg-1 col-md-2 col-sm-2">
          <p className="blockElement">{grid[0][3]}</p>
        </div>
      </div>
      <div className="d-flex row justify-content-center">
        <div className="block col-lg-1 col-md-2 col-sm-2">
          <p className="blockElement">{grid[1][0]}</p>
        </div>
        <div className="block col-lg-1 col-md-2 col-sm-2">
          <p className="blockElement">{grid[1][1]}</p>
        </div>
        <div className="block col-lg-1 col-md-2 col-sm-2">
          <p className="blockElement">{grid[1][2]}</p>
        </div>
        <div className="block col-lg-1 col-md-2 col-sm-2">
          <p className="blockElement">{grid[1][3]}</p>
        </div>
      </div>
      <div className="d-flex row justify-content-center">
        <div className="block col-lg-1 col-md-2 col-sm-2">
          <p className="blockElement">{grid[2][0]}</p>
        </div>
        <div className="block col-lg-1 col-md-2 col-sm-2">
          <p className="blockElement">{grid[2][1]}</p>
        </div>
        <div className="block col-lg-1 col-md-2 col-sm-2">
          <p className="blockElement">{grid[2][2]}</p>
        </div>
        <div className="block col-lg-1 col-md-2 col-sm-2">
          <p className="blockElement">{grid[2][3]}</p>
        </div>
      </div>
      <div className="d-flex row justify-content-center">
        <div className="block col-lg-1 col-md-2 col-sm-2">
          <p className="blockElement">{grid[3][0]}</p>
        </div>
        <div className="block col-lg-1 col-md-2 col-sm-2">
          <p className="blockElement">{grid[3][1]}</p>
        </div>
        <div className="block col-lg-1 col-md-2 col-sm-2">
          <p className="blockElement">{grid[3][2]}</p>
        </div>
        <div className="block col-lg-1 col-md-2 col-sm-2">
          <p className="blockElement">{grid[3][3]}</p>
        </div>
      </div>
    </div>
  );
};

export default Table;
