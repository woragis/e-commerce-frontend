import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { RootState } from "../types/redux.type";
import themeReducer from "./themeSlice";
import userReducer from "./userSlice";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("reduxState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.error("Error loading the state from local storage: " + error);
    return undefined;
  }
};

const saveState = (state: RootState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("reduxState", serializedState);
  } catch (error) {
    console.error("error saving state to local storage: " + error);
  }
};

const store = configureStore({
  reducer: {
    theme: themeReducer,
    user: userReducer,
  },
  preloadedState: loadState(),
});

store.subscribe(() => {
  saveState(store.getState());
});

export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export default store;
