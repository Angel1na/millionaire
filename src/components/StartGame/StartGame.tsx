import { useContext } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { nextQuestion } from '../../redux/questionsSlice';
import hand from '../../images/hand 1.png';
import classes from './StartGame.module.css';
import MyButton from '../../UI/MyButton/MyButton';
import AppContext from '../../context';

const StartGame = () => {

  const dispatch = useAppDispatch();

  const appContext = useContext(AppContext);

  return (
    <div className={`${classes.container} ${appContext?.isMobile ? classes.mobile : ''}`}>
      <div className={classes.mask}></div>
      <div className={classes.wrapper}>
        <div>
          <img src={hand} alt='' />
        </div>
        <div>
          <div className={classes.label}>Who wants to be a millionaire?</div>
          <div className={classes.btn}>
            <MyButton onClick={() => dispatch(nextQuestion())}>Start</MyButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartGame;