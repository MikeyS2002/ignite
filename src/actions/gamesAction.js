import axios from 'axios';

import { populairGamesURL, upcomingGamesURL, newGamesURL, searchGameURL } from '../api';

//action creator
export const loadGames = () => async (dispatch) => {
    //fetch axios
    const populairData = await axios.get(populairGamesURL());
    const upcomingData = await axios.get(upcomingGamesURL());
    const newGamesData = await axios.get(newGamesURL());
    dispatch({
        type: "FETCH_GAMES",
        payload: {
            populair: populairData.data.results,
            upcoming: upcomingData.data.results,
            newGames: newGamesData.data.results,
        },
    });
};

export const fetchSearch = (game_name) => async (dispatch) => {
    const searchGames = await axios.get(searchGameURL(game_name));

    dispatch({
        type: "FETCH_SEARCHED",
        payload: {
            searched: searchGames.data.results,
        }
    })
}