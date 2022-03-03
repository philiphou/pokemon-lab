import "./Pokemon.css"
function Pokemon(props) {
  return (
    <div className="Pokemon">
      <h1>HP: {props.pokemon.hp}</h1>
      <img className="pokemon-img" src={props.pokemon.img} alt=""/>
      <button onClick={() => props.attack_handler(props.pokemon.name)}>
        Attack
      </button>
    </div>
  );
}

export default Pokemon;
