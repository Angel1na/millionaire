import { useAppSelector } from '../../redux/hooks';
import DiamondBox from '../../UI/DiamondBox/DiamondBox';
import classes from './ScoreBox.module.css';

const ScoreBox = () => {

  const scores = useAppSelector(state => state.questions.scores);
  const currentQuestionIndex = useAppSelector(state => state.questions.currentQuestionIndex) - 1;

  return (
    <div className={classes.wrapper}>
      <div>{scores.map((score, i) => <DiamondBox key={score} styles={['small', (currentQuestionIndex === i ? 'current' : (i < currentQuestionIndex ? 'passed' : 'default'))]}><>${new Intl.NumberFormat().format(score)}</></DiamondBox>)}</div>
    </div>
  );
};

export default ScoreBox;