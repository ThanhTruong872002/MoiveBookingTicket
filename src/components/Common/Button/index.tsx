import {  FC, ReactNode } from 'react'
import styles from './Button.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

interface ButtonProps{
  children: ReactNode
  className?: any
  small?: boolean
  primary?: boolean
}

const Button: FC<ButtonProps> = ({ children, primary, small, className }) => {

  const classes = cx('primary', {
    [className]: className,
    primary,
    small
  })

  return (
    <div>
      <button className={classes}>{children}</button>
    </div>
  )
}

export default Button


// primary ? <button className={classes}>{children}</button> : <div className={classes}>{children}</div>