import React from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './ducks/store';



// Import Components //
// import Auth from './Components/Auth/Auth';
// import Dashboard from './Components/Dashboard/Dashboard';
// import Form from './Components/Form/Form';
// import Post from './Components/Post/Post';
import routes from './routes';
import Nav from './Components/Nav/Nav';
// // //




function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <div>
          {routes}
        </div>
      </HashRouter>
    </Provider>
  );
}

export default App;
