import { useCallback, useState, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { nextQuestion, setIsGameOver } from '../../redux/questionsSlice';
import DiamondBox from '../../UI/DiamondBox/DiamondBox';
import classes from './QuestionBox.module.css';

const indexToLetter: any = {
  0: 'A',
  1: 'B',
  2: 'C',
  3: 'D'
};

const QuestionBox = () => {

  const timer = useRef<any|null>(null);

  const [clickedAnswerIndex, setClickedAnswerIndex] = useState<number>(-1);
  const [clickedQuestionId, setClickedQuestionId] = useState<number | null | undefined>(null);

  const currentQuestion = useAppSelector(state => state.questions.currentQuestion);

  const dispatch = useAppDispatch();

  const handleClick = useCallback((i: number) => {
    setClickedQuestionId(currentQuestion?.id);
    setClickedAnswerIndex(i);
    // prevent dblclick
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      if (currentQuestion?.correctAnswerIndex === i) {
        dispatch(nextQuestion());
      } else {
        dispatch(setIsGameOver())
      }
    }, 1000);
  }, [currentQuestion]);

  return (
    <div className={classes.wrapper}>
      <div>
        <div className={classes.question}>{currentQuestion?.question}</div>
      </div>
      <div>
        <div className={classes.answers}>{currentQuestion?.answers.map((answer, i) => <DiamondBox key={answer.id} styles={[(clickedQuestionId === currentQuestion?.id && clickedAnswerIndex === i) ? (currentQuestion?.correctAnswerIndex === i ? "correct" : "wrong") : "default"]} onClick={() => handleClick(i)}><div><span>{indexToLetter[i]}</span><span>{answer.answer}</span></div></DiamondBox>)}</div>
      </div>
    </div>
  );
};

export default QuestionBox;