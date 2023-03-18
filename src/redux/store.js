import { composeWithDevTools } from "@redux-devtools/extension";
import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducers/rootReducer";
import logger from "redux-logger";
import cartCounter from "./middlewares/cartCounter";
import thunk from "redux-thunk";




const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(cartCounter, thunk, logger)));

export default store;
