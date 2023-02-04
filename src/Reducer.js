export const Reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD":
      return { ...state, result: action.payload };
    case "SUBTRACT":
      return { ...state, result: action.payload };
    case "MULTIPLY":
      return { ...state, result: action.payload };
    case "ADDITION":
      return { ...state, result: action.payload };
  }
};
