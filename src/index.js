import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import UseInputApp from './hook/useInput';
import UseTabsApp from './hook/useTab';
import UseClickApp from './hook/useClick';
import UseAxiosApp from './hook/useAxios';

ReactDOM.render(
  <React.StrictMode>
    <UseAxiosApp></UseAxiosApp>
  </React.StrictMode>,
  document.getElementById('root')
);

