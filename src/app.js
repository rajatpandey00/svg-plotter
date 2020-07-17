import ReactDOM from 'react-dom'
import React from 'react';
import SVGContainer from './components/SVGContainer'
import create from './components/SVGCreate'
import data from './components/data'

const appRoot = document.getElementById('root');
ReactDOM.render(<SVGContainer children={create(data)} />, appRoot);