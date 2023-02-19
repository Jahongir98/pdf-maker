import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style.css'
import ReactPDF from "@react-pdf/renderer";
import MyDocument from "./pdf";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

ReactPDF.render(<MyDocument />, `${__dirname}/example.pdf`);