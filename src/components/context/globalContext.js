import { createContext, useReducer } from "react";

export const GlobalContext = createContext({});

let initialState = {
    logged:null,
}


const reducer = (state,action) => {
    switch(action.type) {
        case "login":
         return {
             ...state,
             logged: action.payload
         }
         default:
            return new Error("nothing return");
    }
}

const GlobalProvider = ({children}) => {

    const [state,dispatch] = useReducer(reducer,initialState);

    return (
        <GlobalContext.Provider
        value={{
            state,
            dispatch
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;



