<<<<<<< HEAD
<<<<<<< HEAD
import { FETCH_WATCHLIST, FETCH_TRENDING_SHOWS, FETCH_POPULAR_SHOWS } from '../actions/types';
=======
import { FETCH_WATCHLIST, FETCH_TRENDING_SHOWS, FETCH_POPULAR_SHOWS, FETCH_EPISODES } from '../actions/types';
>>>>>>> 17c3878c042e9028046363ab08b227902795fc54
=======
import {
  FETCH_WATCHLIST,
  FETCH_TRENDING_SHOWS,
  FETCH_POPULAR_SHOWS,
  FETCH_EPISODES
} from '../actions/types';
>>>>>>> 867567b4d845fb4448086413051720afaa1b2016

export default function(state = [], action) {
  switch (action.type) {
  case FETCH_TRENDING_SHOWS:
    return { ...state, trendingShows: action.payload.data };
  case FETCH_WATCHLIST:
    return { ...state, watchList: action.payload.data };
  case FETCH_POPULAR_SHOWS:
    return { ...state, popularShows: action.payload.data.results };
<<<<<<< HEAD
=======
  case FETCH_EPISODES:
    return { ...state, episodes: action.payload.data };
>>>>>>> 17c3878c042e9028046363ab08b227902795fc54
  }
  return state;
}
