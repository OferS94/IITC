import { Outlet, useParams } from "react-router-dom";
import PokeContainer from "../components/PokeContainer";

const PokemonPage = () => {
  const { name } = useParams(); 

  return (
    <div>
      {!name && (
        <>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/269px-International_Pok%C3%A9mon_logo.svg.png"
            alt="Pokemon logo"
            style={{ display: "block", margin: "20px auto" }}
          />
          <PokeContainer />
        </>
      )}
      <Outlet />
    </div>
  );
};

export default PokemonPage;
