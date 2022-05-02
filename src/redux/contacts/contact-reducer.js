const INITIAL_STATE = {
    contacts: [],
};



const contactReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_CONTACT": {
      return {
        ...state,
        contacts: [...state.contacts, action.payload]
      };
    }

    default:
      return state;
  }
};

export default contactReducer;
