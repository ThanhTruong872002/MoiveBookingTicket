
import { Switch } from '@material-ui/core'
import { IInputField } from '../../../@types/Input'
import { Controller } from 'react-hook-form'



function SwitchField({ form, name} : IInputField) {
  return <Controller name={name} control={form.control} render={() => <Switch />} />
}


export default SwitchField
