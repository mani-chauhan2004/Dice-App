import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ActiveElementContext from './contexts/activeElementContext';
import ScoreProvider from './contexts/scoreContext';
import DiceProvider from './contexts/diceContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ActiveElementContext>
      <DiceProvider>
        <ScoreProvider>
            <App />
        </ScoreProvider>
      </DiceProvider>
    </ActiveElementContext>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
