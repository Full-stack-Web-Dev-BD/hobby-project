import React from 'react';
import Exercise from './views/MyPages/Exercise';
import Explanations from './views/MyPages/Explanations';
const Home = React.lazy(() => import('./views/MyPages/Dashboard'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/home', name: 'Home', component: Home },
  { path: '/explanations', name: 'Explanations', component: Explanations },
  { path: '/exercise/all-exercise', name: 'Exercise', component: Exercise },
];

export default routes;
