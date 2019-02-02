const initialState = {
  people: []
}

// actions...
export const requestPeople = () => ({type: "GET_PEOPLE"})
export const receivePeople = payload => ({type: "RECEIVE_PEOPLE", payload})

// reducer...
export const DataReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case "RECEIVE_PEOPLE":
      return {
        ...state,
        people: payload
      };
    default: return state;
  }
}