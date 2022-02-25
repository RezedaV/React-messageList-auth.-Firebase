import './App.css';
import Router from "./Components/Router/Router";
import {Provider} from "react-redux";
import {store, persistor} from "./store/store";
import {PersistGate} from "redux-persist/integration/react";


function App() {
  return (
      <Provider store={store}>
          <PersistGate persistor={persistor}>
              <div className="App" >
                  <Router />
              </div>
          </PersistGate>
      </Provider>

  );
}

export default App;

