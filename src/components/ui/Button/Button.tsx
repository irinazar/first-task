import  { ButtonHTMLAttributes } from "react";
import styles from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export default function Button(props: ButtonProps): JSX.Element {
  const { children, className, ...otherProps } = props;

  return (
    <button className={className ? className : styles.btn} {...otherProps}>
      {children}
    </button>
  );
}
