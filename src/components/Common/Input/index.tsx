
import { FC } from 'react'


interface IInput {
  typeInput: string
  placeholder?: string 
  value: string | undefined
  onChange: React.ChangeEventHandler<HTMLInputElement>
  readOnly?: boolean | undefined
}


const Input: FC<IInput> = ({ typeInput, placeholder, value, onChange, readOnly,  }) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e)
  }

  const readOnlyCss = readOnly ? 'text-[#ccc]' : 'text-black'

  return (
    <input
      className={`w-[430px] h-[40px] border-[1px] border-solid border-[#000] rounded-md p-3 ${readOnlyCss}`}
      type={typeInput}
      placeholder={placeholder}
      value={value}
      onChange={(e) => handleOnChange(e)}
      readOnly={readOnly}
    />
  )
}

export default Input