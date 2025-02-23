// Action types
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const DECREMENTFIVE = 'DECREMENTFIVE';
export const INCREMENTFIVE = 'INCREMENTFIVE';

// Action creators
export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});

export const incrementfive = () => ({
    type: INCREMENTFIVE,
  });
  
  export const decrementfive = () => ({
    type: DECREMENTFIVE,
  });