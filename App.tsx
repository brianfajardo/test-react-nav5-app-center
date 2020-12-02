import 'react-native-gesture-handler';
import React from 'react';

import {Providers} from './src/Providers';
import {Routes} from './src/Routes';

export default () => (
  <Providers>
    <Routes />
  </Providers>
);
