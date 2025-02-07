import { ADD_PLACE, DELETE_PLACE } from '../actions/actionTypes';

const initialState = {
  places: [],
  selectedPlace: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: [
          ...state.places,
          {
            name: action.payload.place.placeName,
            image: action.payload.image,
            location: action.payload.location,
            key: Math.random()
          }
        ]
      };
    case DELETE_PLACE:
      const places = state.places.filter(
        place => place.key !== action.payload.id
      );
      return {
        ...state,
        places
      };
    default:
      return state;
  }
};

export default reducer;
