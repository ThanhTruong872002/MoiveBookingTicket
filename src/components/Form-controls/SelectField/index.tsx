
import { Controller } from 'react-hook-form'
import { DatePicker } from 'antd'
import { IInputField } from '../../../@types/Input'


function SelectField({ form, name}: IInputField) {
  return (
    <Controller
      name={name}
      control={form.control}
      render ={() => <DatePicker/>}
    />
  )
}

export default SelectField
