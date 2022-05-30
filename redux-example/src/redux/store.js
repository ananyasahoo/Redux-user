import { createStore,applyMiddleware} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "../reducers/rootReducer";
const persistConfig = {
key: "persistedData",
storage,
whitelist: ["auth"]
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const composeEnhancer = composeWithDevTools({ trace:true });
const middleware = [thunk];
const store = createStore(
persistedReducer,
composeEnhancer(applyMiddleware(...middleware))
);
const persistor = persistStore(store);
export { store, persistor };