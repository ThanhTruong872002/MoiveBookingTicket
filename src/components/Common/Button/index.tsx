import {  FC, ReactNode } from 'react'
import styles from './Button.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

interface ButtonProps {
  children: ReactNode
  className?: any
  small?: boolean
  primary?: boolean
  btnLogin?: boolean
  btnShowingFilm?: boolean
  btnSearchFilm?: boolean
  booked?: boolean
  bookedEnd?: boolean
}

const Button: FC<ButtonProps> = ({
  children,
  primary,
  small,
  className,
  btnLogin,
  btnShowingFilm,
  btnSearchFilm,
  booked,
  bookedEnd
}) => {
  const classes = cx('primary', {
    [className]: className,
    primary,
    small,
    btnLogin,
    btnShowingFilm,
    btnSearchFilm,
    booked,
    bookedEnd
  })

  return (
    <div>
      <button className={classes}>{children}</button>
    </div>
  )
}

export default Button


// primary ? <button className={classes}>{children}</button> : <div className={classes}>{children}</div>