import { createContext, useReducer } from "react";

export const UserContext = createContext();
const initialValue = {
  user: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "getUser": {
      return { ...state, user: action.payload };
    }
    case "logout": {
      return { ...state, user: [] };
    }
    default:
      return state;
  }
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
