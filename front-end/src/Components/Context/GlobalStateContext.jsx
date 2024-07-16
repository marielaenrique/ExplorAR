import { createContext, useReducer } from "react";

const initialState = {
  content: "logout",
  token: "",
  initials: "",
  userInfo: {},
  currentSearch: {
    date: {
      startDate : undefined,
      endDate : undefined
    },
    category : undefined
  },
  experience :undefined
};


const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, content: "logged", token: action.token , initials: action.initials, userInfo: action.userInfo};
    case "LOGOUT":
      return { ...state, content: "logout", token: "" };
    case "START-DATE":
      return { ...state, currentSearch: {...state.currentSearch, date: {...state.currentSearch.date, startDate: action.startDate}}};
    case "END-DATE":
      return { ...state, currentSearch: {...state.currentSearch, date: {...state.currentSearch.date, endDate: action.endDate}}};
    case "SELECTED-CATEGORY":
      return { ...state, currentSearch: {...state.currentSearch, category: action.category }};
    case "SELECTED-EXPERIENCE":
      return { ...state, experience: action.experience };
    default:
      return state;
  }
};


export const GlobalStateContext = createContext();

const GlobalStateContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
      <GlobalStateContext.Provider value={{ state, dispatch }}>
        {children}
      </GlobalStateContext.Provider>
    );
}

export default GlobalStateContextProvider;