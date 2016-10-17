import { SEARCH_RESULTS } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
  case SEARCH_RESULTS:
    return {
      searchResults: action.payload.data
    };
  }
  return state;
}