import './App.css';
import Router from "./Components/Router/Router";
import {Provider} from "react-redux";
import {store} from "./store/store";


function App() {
  return (
      <Provider store={store}>
          <div className="App" >
              <Router />
          </div>
      </Provider>

  );
}

export default App;

