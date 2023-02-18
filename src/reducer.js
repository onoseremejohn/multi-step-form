import { SET_ERROR, SET_PAGE, SET_USER, SET_PLAN, SET_ADDON } from "./actions";

export default function (state, action) {
  switch (action.type) {
    case SET_USER: {
      const { name, value } = action.payload;
      return { ...state, [name]: value };
    }
    case SET_PAGE: {
      if (action.payload === "next") {
        let newPage = state.page + 1;
        newPage = newPage > 4 ? 4 : newPage;
        return { ...state, page: newPage };
      }
      if (action.payload === "prev") {
        let newPage = state.page - 1;
        newPage = newPage < 1 ? 1 : newPage;
        return { ...state, page: newPage };
      }
    }
    case SET_ERROR:
      const error = action.payload;
      if (error === "name") {
        return {
          ...state,
          error: { ...state.error, name: "Please enter at least 2 names" },
        };
      }
      if (error === "email") {
        return {
          ...state,
          error: { ...state.error, email: "Valid email is required" },
        };
      }
      if (error === "number") {
        return {
          ...state,
          error: { ...state.error, number: "Valid Phone Number is required" },
        };
      }
      if (error === "reset") {
        return {
          ...state,
          error: {
            ...state.error,
            name: "",
            email: "",
            number: "",
            plan: false,
          },
        };
      }
      if (error === "plan") {
        return {
          ...state,
          error: { ...state.error, plan: true },
        };
      }
    case SET_PLAN: {
      const { name, value } = action.payload;
      return { ...state, plan: { ...state.plan, [name]: value } };
    }
    case SET_ADDON: {
      const { val, name } = action.payload;
      if (val) {
        return { ...state, addOns: [...state.addOns, name] };
      } else {
        const leftOver = state.addOns.filter((item) => item !== name);
        return { ...state, addOns: [...leftOver] };
      }
    }
    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
}
