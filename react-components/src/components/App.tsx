import React from 'react';
import '../style.css';
import './app.css';
import MainPage from './main_page/MainPage';

export default function App(): JSX.Element {
    return <html>
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            <title>React Components</title>
            <link href='style.css' rel='stylesheet' />
        </head>
        <body>
            <header>

            </header>
            <main>
                <MainPage></MainPage>
            </main>
            <footer className="footer">

            </footer>
        </body>
    </html>

}