import React from "react";
import Routers from "./routes";
import { Provider } from "react-redux";
import persistor, { store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Routers />
      </PersistGate>
    </Provider>
  );
}

export default App;