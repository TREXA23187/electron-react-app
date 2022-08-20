import GameTank from './pages/game-tank';
import './App.css';
import routes from './router/index.js';
import { useRoutes } from 'react-router';

function App() {
  const element = useRoutes(routes);
  return (
    <div className='App'>
      {/* <GameTank /> */}
      {/* 注册路由 */}
      {element}
    </div>
  );
}

export default App;
