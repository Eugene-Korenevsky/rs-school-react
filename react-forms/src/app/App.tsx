import React from 'react';
import FormPage from '../components/FormPage';
import '../style.css';

export default function App(): JSX.Element {
  return <html>
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <title>React Forms</title>
      <link href='style.css' rel='stylesheet' />
    </head>
    <body>
      <header className="header">
      </header>
      <main>
        <FormPage></FormPage>
      </main>
      <footer className="footer">

      </footer>
    </body>
  </html>

}