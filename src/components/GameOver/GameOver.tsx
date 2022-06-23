import { useContext } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { tryAgain } from '../../redux/questionsSlice';
import hand from '../../images/hand 1.png';
import classes from './GameOver.module.css';
import MyButton from '../../UI/MyButton/MyButton';
import AppContext from '../../context';

const GameOver = () => {

  const totalScore = useAppSelector(state => state.questions.totalScore);

  const dispatch = useAppDispatch();

  const appContext = useContext(AppContext);

  return (
    <div className={`${classes.container} ${appContext?.isMobile ? classes.mobile : ''}`}>
      <div className={classes.wrapper}>
        <div>
          <img src={hand} alt='hand' />
        </div>
        <div>
          <div>
            <div className={classes.label}>Total score:</div>
            <div className={classes.value}>${new Intl.NumberFormat().format(totalScore || 0)} earned</div>
          </div>
          <div className={classes.btn}>
            <MyButton onClick={() => dispatch(tryAgain())}>Try again</MyButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameOver;