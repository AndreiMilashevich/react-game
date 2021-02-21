import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './Components/App/App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap-grid.min.css';

const score = [
  {user: 'Alex', score: '370'},
  {user: 'Max', score: '160'},
  {user: 'Dima', score: '888'},
  {user: 'Vadim', score: '14'},
  {user: 'Alex', score: '2222'},
  {user: 'Alex', score: '23'},
  {user: 'Alex', score: '23'},
  {user: 'Alex', score: '23'},
  {user: 'Alex', score: '23'},
  {user: 'Alex', score: '23'},
  {user: 'Alex', score: '23'},
  {user: 'Alex', score: '23'},
  {user: 'Alex', score: '23'},
  {user: 'Alex', score: '23'},
  {user: 'Alex', score: '23'},
  {user: 'Alex', score: '23'},
  {user: 'Alex', score: '23'},
  {user: 'Alex', score: '23'},
  {user: 'Alex', score: '23'},
  {user: 'Alex', score: '23'},
  {user: 'Alex', score: '23'},
  {user: 'Alex', score: '23'},
  {user: 'Alex', score: '23'},
  {user: 'Alex', score: '23'},
  {user: 'Alex', score: '23'},
]


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

export { score };