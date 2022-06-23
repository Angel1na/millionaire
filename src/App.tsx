import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import Game from './components/Game/Game';
import GameOver from './components/GameOver/GameOver';
import StartGame from './components/StartGame/StartGame';
import { useAppSelector } from './redux/hooks';
import { isMobile } from 'react-device-detect';
import AppContext, { AppContextI } from './context';

function App() {

  const sampleAppContext: AppContextI = {
    isMobile
  };

  const isGameOver = useAppSelector(state => state.questions.isGameOver);

  return (
    <AppContext.Provider value={sampleAppContext}>
      <ErrorBoundary>
        <div className='App'>
          {isGameOver === null && <StartGame />}
          {isGameOver === false && <Game />}
          {isGameOver && <GameOver />}
        </div>
      </ErrorBoundary>
    </AppContext.Provider>
  );
}

export default App;
