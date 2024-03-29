import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import Main from "./Main";
import "./index.css"
import {	BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
	<Main/>
	</BrowserRouter>
);
