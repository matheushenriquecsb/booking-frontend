import { createContext, useEffect, useReducer } from "react";

const userFromStorage = localStorage.getItem("user");
const parsedUser = userFromStorage ? JSON.parse(userFromStorage) : null;

const INITIAL_STATE = {
  user: parsedUser,
  loading: false,
  error: null,
};

export const AuthContext = createContext(INITIAL_STATE);

const AuthReducer = (state: any, action: { type: any; payload: any }) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        loading: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        loading: true,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        loading: true,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        user: null,
        loading: true,
        error: null,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
