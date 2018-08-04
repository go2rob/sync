import rootSaga from "../Sagas/";

import { createStore, applyMiddleware, compose, combineReducers } from "redux";
// import { autoRehydrate } from "redux-persist";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import Config from "../Config/DebugConfig";
import createSagaMiddleware from "redux-saga";
import RehydrationServices from "../Services/RehydrationServices";
import ReduxPersist from "../Config/ReduxPersist";

// const configureStore = (rootReducer, rootSaga) => {
//   /* ------------- Redux Configuration ------------- */
//   const middleware = [];
//   const enhancers = [];

//   /* ------------- Saga Middleware ------------- */
//   const sagaMonitor = null;
//   const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
//   middleware.push(sagaMiddleware);

//   /* ------------- Assemble Middleware ------------- */
//   enhancers.push(applyMiddleware(...middleware));

//   /* ------------- AutoRehydrate Enhancer ------------- */
//   // add the autoRehydrate enhancer
//   if (ReduxPersist.active) {
//     enhancers.push(autoRehydrate());
//   }

//   const store = createStore(rootReducer, compose(...enhancers));

//   // configure persistStore and check reducer version number
//   if (ReduxPersist.active) {
//     RehydrationServices.updateReducers(store);
//   }

//   // kick off root saga
//   sagaMiddleware.run(rootSaga);

//   return store;
// };

const persistConfig = {
  key: "root",
  storage
};

const rootReducer = combineReducers({
  login: require("./LoginRedux").reducer,
  counter: require("./CounterRedux").reducer,
  expense: require("./ExpenseRedux").reducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// export default () => {
//   /* ------------- Assemble The Reducers ------------- */
//   const rootReducer = combineReducers({
//     counter: require("./CounterRedux").reducer,
//   });

//   return configureStore(rootReducer, rootSaga);
// };

export default () => {
  let store = createStore(persistedReducer);
  let persistor = persistStore(store);
  return { store, persistor };
};
