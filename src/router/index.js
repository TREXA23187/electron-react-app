import Home from '../pages/home';
import GameTank from '../pages/game-tank';

import { Navigate } from 'react-router';

const routes = [
  {
    path: '/home',
    exact: true,
    element: <Home />,
  },
  {
    path: '/game-tank',
    exact: true,
    element: <GameTank />,
  },
  {
    path: '*',
    element: <Navigate to='/home' />,
  },
];
export default routes;
