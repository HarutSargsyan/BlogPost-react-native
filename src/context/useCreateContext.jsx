import React, { useReducer, createContext } from "react";

export default (reducer, actions, initilState) => {
  const Context = createContext();
  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initilState);

    //actions=== {addBlogPost: (dispatch) => {return () => {} } }
    const boundActions = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};
