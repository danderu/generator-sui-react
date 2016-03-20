import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import <%= pascal_name %> from '../src';
import './style.scss';
import '../src/index.scss';

ReactDom.render(<<%= pascal_name %> />, document.getElementById('main'));
