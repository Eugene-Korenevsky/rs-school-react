import React from 'react';
import { Provider } from 'react-redux';
import {
  HashRouter,
} from "react-router-dom";
import Header from '../components/header/Header';
import Routing from '../routing/Routing';
import {store} from '../store/Store';
import '../style.css';

export default function App(): JSX.Element {
  return <html>
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <title>React Routing</title>
      <link href='/style.css' rel='stylesheet' />
      <script src="/main.js"></script>
    </head>
    <body>
      <HashRouter>
        <Provider store={store}>
          <header className="header">
            <Header></Header>
          </header>
          <main className="main">
            <Routing />
          </main>
          <footer className="footer">

          </footer>
        </Provider>
      </HashRouter>
    </body>

  </html>

}