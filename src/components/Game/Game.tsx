import { useContext, useState } from 'react';
import QuestionBox from '../QuestionBox/QuestionBox';
import ScoreBox from '../ScoreBox/ScoreBox';
import classes from './Game.module.css';
import AppContext from '../../context';
import close from '../../images/Close.png';
import menu from '../../images/Menu.png';

const Game = () => {

  const appContext = useContext(AppContext);

  const [isScoreBox, setIsScoreBox] = useState(!(appContext?.isMobile));

  return (
    <div className={`${classes.wrapper} ${appContext?.isMobile ? classes.mobile : ''}`} >
      <div><QuestionBox /></div>
      {isScoreBox && <div><ScoreBox /></div>}
      {appContext?.isMobile && <span className={classes.menu} onClick={() => setIsScoreBox(!isScoreBox)}><img src={isScoreBox ? close : menu} /></span>}
    </div>
  );
};

export default Game;