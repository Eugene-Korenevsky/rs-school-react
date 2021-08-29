import React from 'react';
import MainPage from '../components/main_page/MainPage';
import '../style.css';

export default function App(): JSX.Element {
    return <html>
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            <title>React Api</title>
            <link href='style.css' rel='stylesheet' />
        </head>
        <body>
            <header className="header">

            </header>
            <main className="main">
                 <MainPage></MainPage>
            </main>
            <footer className="footer">

            </footer>
        </body>
    </html>

}