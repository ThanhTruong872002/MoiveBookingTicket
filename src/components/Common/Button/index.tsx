import { Attributes, FC, ReactNode } from "react";
import "./style.css";

type ButtonProps = {
  children: ReactNode;
  primary?: boolean;
};

const Button: FC<ButtonProps> = ({ children, primary }) => {
  let Comp = primary ? "button" : "div";

  const classes = "primary";

  return primary ? (
    <button className={classes}>{children}</button>
  ) : (
    <div className={classes}>{children}</div>
  );
  // <div>
  //   <Comp className={classes}>{children}</Comp>
  // </div>
};

export default Button;
