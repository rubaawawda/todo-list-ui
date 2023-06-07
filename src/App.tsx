import React from 'react';
import classes from './app.module.sass';

import { List } from './components';

const App = () => {
  return (
    <div className={classes.app}>
      <List />
    </div>
  );
}

export default App;
