import { Component } from "react";
import "./App.css";
import Pokemon from "./components/Pokemon/Pokemon";

class App extends Component {
  state = {
    pokemon: [
      {
        name: "Charizard",
        img:
          "https://cdn.shopify.com/s/files/1/0407/4376/4129/t/174/assets/collab_pokemon_catalog_charizard-min.png?v=15989348125959668704",
        hp: 150
      },
      {
        name: "Pikachu",
        img:
          "https://i.pinimg.com/550x/cb/33/49/cb3349b86ca661ca61ae9a36d88d70d4.jpg",
        hp: 100
      }
    ],
    status: "Fighters are ready..."
  };

 attack_handler= (name) => {
    let attackedPokemon = [...this.state.pokemon];
    if (name === "Charizard") {
      attackedPokemon[1].hp -= 10;
      this.setState({
        status: "Charizard is attacking Pikachu",
        pokemon: attackedPokemon
      });
    } else {
      attackedPokemon[0].hp -= 10;
      this.setState({
        status: "Pikachu is attacking Charizard",
        pokemon: attackedPokemon
      });
    }
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          {this.state.pokemon.map((p) => (
            <Pokemon attack_handler={this.attack_handler} pokemon={p} />
          ))}
        </div>
        <h2>Status: {this.state.status}</h2>
      </div>
    );
  }
}

export default App;