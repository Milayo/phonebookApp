import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import contactReducer from "./contacts/contact-reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["contact"],
};
const rootReducer = combineReducers({
  contact: contactReducer,
});

export default persistReducer(persistConfig, rootReducer);
