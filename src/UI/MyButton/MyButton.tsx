import classes from './MyButton.module.css';

type MyButtonProps = {
  children: string,
  onClick: Function
}
const MyButton = ({ children, onClick }: MyButtonProps) => {
  return (
    <div className={classes.btn} onClick={() => onClick()}>
      {children}
    </div>
  );
};

export default MyButton;