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
  changePassword?: boolean
  changeConfirmPassword?: boolean
  disabled?: boolean
}

const Button: FC<ButtonProps> = ({
  children,
  disabled,
  primary,
  small,
  className,
  btnLogin,
  btnShowingFilm,
  btnSearchFilm,
  booked,
  bookedEnd,
  changePassword,
  changeConfirmPassword
}) => {
  const classes = cx('primary', {
    [className]: className,
    primary,
    small,
    btnLogin,
    btnShowingFilm,
    btnSearchFilm,
    booked,
    bookedEnd,
    changePassword,
    changeConfirmPassword
  })

  

  return (
    <div>
      <button disabled={disabled} className={classes}>
        {children}
      </button>
    </div>
  )
}

export default Button


// primary ? <button className={classes}>{children}</button> : <div className={classes}>{children}</div>