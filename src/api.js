//Base url
const base_url  = 'https://api.rawg.io/api/';

// Getting the date
const getCurrentDay = () => {
    const day = new Date().getDate();
    if (day < 10) {
        return `0${day}`;
    } else {
        return day;
    }
};

const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if (month < 10) {
        return `0${month}`;
    } else {
        return month;
    }
};

//current year/month/day
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Api key
const key = "f88c67f1866d49a6a362649bfd768920"; 
const key_url = `key=${key}`;

//Populair gamer
const populair_games = `games?${key_url}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?${key_url}&dates=${currentDate},${nextYear}&ordering=-added&page_size=12`;
const new_games = `games?${key_url}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const populairGamesURL = () => `${base_url}${populair_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${new_games}`;

//Game datails
export const gameDetailsURL = (game_id) => `${base_url}games/${game_id}.json?&${key_url}`;
export const GameScreenshotURL = (game_id) => `${base_url}games/${game_id}/screenshots?&.json?&${key_url}`;

//searched game
export const searchGameURL = (game_name) => `${base_url}games?${key_url}&search=${game_name}&page_size=9`;