import { useContext, createContext, useReducer } from "react";
import reducer from "./reducer";
import { SET_USER, SET_PAGE, SET_ERROR, SET_PLAN, SET_ADDON } from "./actions";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const initialState = {
    name: "",
    email: "",
    phoneNumber: "",
    plan: { name: "sfgy", duration: "week" },
    addOns: [],
    page: 4,
    error: {
      name: "",
      email: "",
      number: "",
      plan: false,
    },
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const setUser = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (/^\s+$/.test(value)) return;
    dispatch({ type: SET_USER, payload: { name, value } });
  };

  const setPage = (val) => {
    dispatch({ type: SET_PAGE, payload: val });
  };

  const setError = (err = "reset") => {
    dispatch({ type: SET_ERROR, payload: err });
  };

  const setPlan = (name, value) => {
    dispatch({ type: SET_PLAN, payload: { name, value } });
  };

  const setAddOn = (val, name) => {
    dispatch({ type: SET_ADDON, payload: { val, name } });
  };

  function validateUserInfo(name, email, number) {
    setError();
    const nameRegex = /^[\p{L}'-]+\s+[\p{L}'-]+(\s+[\p{L}'-]+)*$/u;
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\. [0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const phoneRegex = /^\+?\d{8,12}$/;

    const next =
      nameRegex.test(name.trim()) &&
      emailRegex.test(String(email).toLowerCase()) &&
      phoneRegex.test(number.replace(/\s+/g, ""));

    if (next) {
      setError();
      setPage("next");
    } else {
      if (!nameRegex.test(name.trim())) {
        setError("name");
      }
      if (!emailRegex.test(String(email).toLowerCase())) {
        setError("email");
      }
      if (!phoneRegex.test(number.replace(/\s+/g, ""))) {
        setError("number");
      }
    }
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        setUser,
        setPage,
        validateUserInfo,
        setPlan,
        setError,
        setAddOn,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => useContext(AppContext);

export { AppProvider, useGlobalContext };
