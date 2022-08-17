import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "styles/main.css";
import "antd/dist/antd.variable.min.css";
import "react-toastify/dist/ReactToastify.css";
import App from './App';
import { ToastContainer } from "react-toastify";

import reportWebVitals from './reportWebVitals';
import { persistor, store } from "./config/reduxStore";
// import { AuthProvider } from "contexts/AuthProvider";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  <Provider store={store}>
        <PersistGate loading="" persistor={persistor}>
            {/* <AuthProvider> */}
              <ToastContainer />
              <App/>
            {/* </AuthProvider> */}
        </PersistGate>
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


