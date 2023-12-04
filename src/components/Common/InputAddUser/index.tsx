import React, { useState } from 'react'
import { FC } from 'react'

interface IInputAddUsers {
  type?: React.HTMLInputTypeAttribute | undefined
  placeholder?: string | undefined
  onChange: React.ChangeEventHandler<HTMLInputElement>
  value?: string
  setRenderError: React.Dispatch<
    React.SetStateAction<{
      accountError: string
      emailError: string
      passError: string
      phoneError: string
      nameError: string
      message: string
    }>
  >
}

export const InputAddUser: FC<IInputAddUsers> = ({ type, placeholder, value, onChange, setRenderError }) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e)
    if (setRenderError) {
      setRenderError({
        accountError: '',
        emailError: '',
        passError: '',
        phoneError: '',
        nameError: '',
        message: ''
      })
    }
  }
  return (
    <input
      className=' ml-8 p-3 w-[720px] h-[40px] border-[1px] border-solid border-[#ccc]'
      type={type}
      placeholder={placeholder}
      onChange={(e) => handleOnChange(e)}
      value={value}
    />
  )
}
