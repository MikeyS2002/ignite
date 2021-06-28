import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

import Game from "../components/Game";
import GameDetail from "../components/GameDetail";
import { fadeIn } from "../animations";

const Home = () => {
  //get current locaion
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  //fetch games
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  //get that data back
  const { populair, upcoming, newGames, searched } = useSelector(
    (state) => state.games
  );

  return (
    <GameList variants={fadeIn} initial="hidden" animate="show">
      {pathId && <GameDetail pathId={pathId} />}
      {searched[0] && (
        <div className="searched">
          <Games>
            {searched.map((game) => (
              <Game
                name={game.name}
                released={game.released}
                image={game.background_image}
                id={game.id}
                key={game.id}
              />
            ))}
          </Games>
        </div>
      )}
      <h2>Upcoming games</h2>
      <Games>
        {upcoming.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            image={game.background_image}
            id={game.id}
            key={game.id}
          />
        ))}
      </Games>
      <h2>Populair games</h2>
      <Games>
        {populair.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            image={game.background_image}
            id={game.id}
            key={game.id}
          />
        ))}
      </Games>
      <h2>New games</h2>
      <Games>
        {newGames.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            image={game.background_image}
            id={game.id}
            key={game.id}
          />
        ))}
      </Games>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
