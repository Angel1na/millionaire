import classes from './DiamondBox.module.css';

type DiamondBoxProps = {
  styles: string[], // passed, current, default
  children: JSX.Element,
  onClick?: Function
}

const DiamondBox = ({ styles, children, onClick }: DiamondBoxProps) => {
  return (
    <div className={`${classes.diamond} ${styles.map(style => classes[style]).join(' ')}`} onClick={() => onClick ? onClick() : null}>
      <div className={classes.diamondGap}></div>
      <div className={classes.diamondOuter}></div>
      <div className={classes.diamondInner}></div>
      <div className={classes.diamondText}>{children}</div>
    </div>
  );
};

export default DiamondBox;