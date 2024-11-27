import React from "react";

const PokeSlide = ({ id, name, types, sprite }) => {
  const primaryType = types[0]?.type.name;

  return (
    <div className="poke-slide" data-type={primaryType}>
      <p className="pokemonNumber">#{id}</p>
      <img src={sprite} alt={`${name} sprite`} className="pokemonSprite" />
      <h2 className="pokemonName">
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </h2>
      <div className="pokemonTypes">
        {types.map((type) => (
          <span key={type.type.name} className={`type ${type.type.name}`}>
            {type.type.name.toUpperCase()}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PokeSlide;