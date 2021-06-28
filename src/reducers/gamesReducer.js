const initState = {
    populair : [],
    newGames :[],
    upcoming : [],
    searched: [],
};

const gamesReducer = (state=initState , action) => {
    switch(action.type){
        case "FETCH_GAMES":
            return { ...state, 
                populair: action.payload.populair, 
                upcoming: action.payload.upcoming,
                newGames: action.payload.newGames,
            };
            case "FETCH_SEARCHED":
                return{
                    ...state,
                    searched: action.payload.searched,
                };
            case "CLEAR_SEARCHED":
                return {
                    ...state,
                    searched: [],
                }
        default:
            return { ...state }
    }
};

export default gamesReducer;