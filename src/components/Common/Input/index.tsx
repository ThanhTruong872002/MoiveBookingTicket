
import { FC } from 'react'


interface IInput {
  typeInput: string
  placeholder: string
  value: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
}


const Input: FC<IInput> = ({ typeInput, placeholder, value, onChange }) => {

  const handleOnChange = (e:any) => {
      onChange(e.target)

  }

  return (
    <input
      className='w-[430px] h-[40px] border-[1px] border-solid border-[#000] rounded-md p-3 text-black'
      type={typeInput}
      placeholder={placeholder}
      value={value}
      onChange={(e) => handleOnChange(e)}
    />
  )
}

export default Input