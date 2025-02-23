import { DECREMENT, DECREMENTFIVE, INCREMENT, INCREMENTFIVE } from "../actions/counterActions";

// Initial state
const initialState = {
  counter: 0,
};

// Reducer function
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
        
      };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
               
      };
      case INCREMENTFIVE:
      return {
        ...state,
        counter: state.counter + 5,
        
      };
    case DECREMENTFIVE:
      return {
        ...state,
        counter: state.counter - 5,
               
      };
    default:
      return state;
  }
};

export default counterReducer;