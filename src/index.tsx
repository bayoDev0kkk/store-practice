import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import LayOut from "./layout/LayOut";
import {Provider} from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
        <LayOut>
            <App />
        </LayOut>
    </BrowserRouter>
  </Provider>
)
