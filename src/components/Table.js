import React from "react";

const Table = ({ grid }) => {
  const styleForBlocks = {
    "0": 'aliceblue',
    "2": "#eee4da",
    "4": "#eee1c9",
    "8": '#f3b27a',
    "16": '#f69664',
    "32": '#f77c5f',
    "64": '#f75f3b',
    "128": '#edd073',
  }
  grid = grid.map(arr => (arr.map(el => el.toString())))
  console.log(grid);

  return (
    <div className="container-fluid">
      <div className="d-flex row justify-content-center">
        <div style={{ backgroundColor: styleForBlocks[grid[0][0]] }} className="block col-3 col-lg-1 col-md-2 col-sm-2">
          <p className="blockElement">{grid[0][0] !== '0' ? grid[0][0] : ''}</p>
        </div>
        <div style={{ backgroundColor: styleForBlocks[grid[0][1]] }} className="block col-3 col-lg-1 col-md-2 col-sm-2">
          <p className="blockElement">{grid[0][1] !== '0' ? grid[0][1] : ''}</p>
        </div>
        <div style={{ backgroundColor: styleForBlocks[grid[0][2]] }} className="block col-3 col-lg-1 col-md-2 col-sm-2">
          <p className="blockElement">{grid[0][2] !== '0' ? grid[0][2] : ''}</p>
        </div>
        <div style={{ backgroundColor: styleForBlocks[grid[0][3]] }} className="block col-3 col-lg-1 col-md-2 col-sm-2">
          <p className="blockElement">{grid[0][3] !== '0' ? grid[0][3] : ''}</p>
        </div>
      </div>
      <div className="d-flex row justify-content-center">
        <div style={{ backgroundColor: styleForBlocks[grid[1][0]] }} className="block col-3 col-lg-1 col-md-2 col-sm-2">
          <p className="blockElement">{grid[1][0] !== '0' ? grid[1][0] : ''}</p>
        </div>
        <div style={{ backgroundColor: styleForBlocks[grid[1][1]] }} className="block col-3 col-lg-1 col-md-2 col-sm-2">
          <p className="blockElement">{grid[1][1] !== '0' ? grid[1][1] : ''}</p>
        </div>
        <div style={{ backgroundColor: styleForBlocks[grid[1][2]] }} className="block col-3 col-lg-1 col-md-2 col-sm-2">
          <p className="blockElement">{grid[1][2] !== '0' ? grid[1][2] : ''}</p>
        </div>
        <div style={{ backgroundColor: styleForBlocks[grid[1][3]] }} className="block col-3 col-lg-1 col-md-2 col-sm-2">
          <p className="blockElement">{grid[1][3] !== '0' ? grid[1][3] : ''}</p>
        </div>
      </div>
      <div className="d-flex row justify-content-center">
        <div style={{ backgroundColor: styleForBlocks[grid[2][0]] }} className="block col-3 col-lg-1 col-md-2 col-sm-2">
          <p className="blockElement">{grid[2][0] !== '0' ? grid[2][0] : ''}</p>
        </div>
        <div style={{ backgroundColor: styleForBlocks[grid[2][1]] }} className="block col-3 col-lg-1 col-md-2 col-sm-2">
          <p className="blockElement">{grid[2][1] !== '0' ? grid[2][1] : ''}</p>
        </div>
        <div style={{ backgroundColor: styleForBlocks[grid[2][2]] }} className="block col-3 col-lg-1 col-md-2 col-sm-2">
          <p className="blockElement">{grid[2][2] !== '0' ? grid[2][2] : ''}</p>
        </div>
        <div style={{ backgroundColor: styleForBlocks[grid[2][3]] }} className="block col-3 col-lg-1 col-md-2 col-sm-2">
          <p className="blockElement">{grid[2][3] !== '0' ? grid[2][3] : ''}</p>
        </div>
      </div>
      <div className="d-flex row justify-content-center">
        <div style={{ backgroundColor: styleForBlocks[grid[3][0]] }} className="block col-3 col-lg-1 col-md-2 col-sm-2">
          <p className="blockElement">{grid[3][0] !== '0' ? grid[3][0] : ''}</p>
        </div>
        <div style={{ backgroundColor: styleForBlocks[grid[3][1]] }} className="block col-3 col-lg-1 col-md-2 col-sm-2">
          <p className="blockElement">{grid[3][1] !== '0' ? grid[3][1] : ''}</p>
        </div>
        <div style={{ backgroundColor: styleForBlocks[grid[3][2]] }} className="block col-3 col-lg-1 col-md-2 col-sm-2">
          <p className="blockElement">{grid[3][2] !== '0' ? grid[3][2] : ''}</p>
        </div>
        <div style={{ backgroundColor: styleForBlocks[grid[3][3]] }} className="block col-3 col-lg-1 col-md-2 col-sm-2">
          <p className="blockElement">{grid[3][3] !== '0' ? grid[3][3] : ''}</p>
        </div>
      </div>
    </div>
  );
};

export default Table;
