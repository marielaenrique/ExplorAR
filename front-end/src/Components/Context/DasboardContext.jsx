import { createContext, useReducer } from "react";

const initialState = {
  content: "addExperience",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "add_experience":
      return { ...state, content: "addExperience" };
    case "delete_experience":
      return { ...state, content: "deleteExperience" };
    case "edit_categories":
      return { ...state, content: "editCategories" };
    default:
      return state;
  }
};

export const DasboardContext = createContext();

const DasboardContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
      <DasboardContext.Provider value={{ state, dispatch }}>
        {children}
      </DasboardContext.Provider>
    );
}

export default DasboardContextProvider;