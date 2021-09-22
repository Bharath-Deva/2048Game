import React, { Component, useState, useEffect } from "react";
import Table from "./Table";
import Header from "./Header";
import {
  fillSpots,
  pushingDown,
  pushingLeft,
  pushingUp,
  pushingRight,
} from "../action";
import "./App.css";


export default class App extends Component {
  constructor(props) {
    super(props)
    let a = localStorage.getItem('bestScore')
    if (!a) {
      localStorage.setItem('bestScore', 0)
      a = 0
    }
    console.log(a);
    this.state = {
      grid: [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ],
      score: 0,
      bestScore: a,
      gameOverFlag: false,
      gameOvermessage: ''
    }
    fillSpots(this.state.grid)
    fillSpots(this.state.grid)
  }

  componentDidMount() {
    window.addEventListener("keydown", (event) => {
      if (event.key === "ArrowDown") {
        let temp = pushingDown(this.state.grid, this.state.score);
        if (temp[0] === false) {
          this.setState({
            gameOverFlag: true,
            grid: temp[1]
          })
        }
        else {
          this.setState({
            grid: temp[0],
            score: temp[1]
          });
        }
      }
      if (event.key === "ArrowUp") {
        let temp = pushingUp(this.state.grid, this.state.score);
        if (temp[0] === false) {
          this.setState({
            gameOverFlag: true,
            grid: temp[1]
          })
        }
        else {
          this.setState({
            grid: temp[0],
            score: temp[1]
          });
        }
      }
      if (event.key === "ArrowLeft") {
        let temp = pushingLeft(this.state.grid, this.state.score);
        if (temp[0] === false) {
          this.setState({
            gameOverFlag: true,
            grid: temp[1]
          })
        }
        else {
          this.setState({
            grid: temp[0],
            score: temp[1]
          });
        }
      }
      if (event.key === "ArrowRight") {
        let temp = pushingRight(this.state.grid, this.state.score);
        if (temp[0] === false) {
          this.setState({
            gameOverFlag: true,
            grid: temp[1]
          })
        }
        else {
          this.setState({
            grid: temp[0],
            score: temp[1]
          });
        }
      }

    });
  }

  newGameBtnOnClick = () => {
    console.log('asf');
    let tempScore
    let tempGrid = fillSpots([
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ])
    if (this.state.score > this.state.bestScore) {
      tempScore = this.state.score;
      localStorage.setItem('bestScore', tempScore)
    }
    else {
      tempScore = this.state.bestScore
    }
    this.setState({
      grid: tempGrid,
      score: 0,
      bestScore: tempScore,
      gameOvermessage: ''
    })
  }

  render() {
    return (<div className="App">
      <Header newGameOnClick={this.newGameBtnOnClick} score={this.state.score} bestScore={this.state.bestScore}></Header>
      {this.state.gameOvermessage ?
        <div className="text-center">
          <h2>{this.state.gameOvermessage}</h2>
        </div> :
        <Table grid={this.state.grid}></Table>
      }
      <div className="m-4 reset text-center">
        <button className="btn btn-primary" onClick={this.newGameBtnOnClick}>New Game</button>
      </div>
    </div>
    )
  }

  componentDidUpdate() {
    if (this.state.gameOverFlag) {
      alert('game over. Press new game or reset')
      this.setState({
        gameOvermessage: 'Game Over!!',
        gameOverFlag: false
      })

    }
    else {
      if (this.state.gameOvermessage === '') {
        console.log('a');
        for (let i = 0; i < this.state.grid.length; i++) {
          for (let j = 0; j < this.state.grid[i].length; j++) {
            // console.log(this.state.grid[i][j]);
            if (this.state.grid[i][j] === 128) {
              alert('Congratulations!! You Won')
              this.setState({
                gameOvermessage: 'Congratulations!! You Won'
              })
            }
          }
        }
      }
    }
  }

}
