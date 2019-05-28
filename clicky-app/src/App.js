import React, { Component } from "react";
import DreamCard from "./components/DreamCard";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav"
import Header from "./components/Header"
import Title from "./components/Title";
import player from "./players.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    player,
    clickedPlayer: [],
    score: 0
  };

  clickPlayer = event => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const player = event.target.alt;
    const clickedPlayer = this.state.clickedPlayer.indexOf(player) > -1
    if (clickedPlayer) {
      this.setState({
        player: this.state.player.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedPlayer: [],
        score: 0
      });
      alert("You Lose.")
    } else {
      this.setState(
        {
          fish: this.state.player.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedPlayer: this.state.clickedPlayer.concat(
            player
          ),
          score: this.state.score + 1
        },
        () => {
          if(this.state.score === 12) {
            alert("You Win");
            this.setState({
              fish: this.state.player.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedPlayer: [],
              score: 0
            });
          }
        }
      );
    }
    // Set this.state.friends equal to the new friends array
    this.setState({ player });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Dream Team</Title>
        <Nav>Clicky Game  Score: 0 | Top Score: 0</Nav>
        <Header>Click on an image to earn points, but don't click the same image more than once.</Header>
        {this.state.player.map(player => (
          <DreamCard
            clickPlayer={this.clickPlayer}
            id={player.id}
            key={player.id}
            name={player.name}
            // image={player.image}
            // position={player.position}
            // number={player.number}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
