import { TextField } from '@material-ui/core'
import { Controller } from 'react-hook-form'
import { IInputField } from '../../../@types/Input'



function InputField({ form, name, label, disable, variant, size, style }: IInputField) {
  const { formState } = form
  const hasError = formState.errors[name] && formState.dirtyFields[name]

  //   console.log(formState.errors[name], formState)

  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          disabled={disable}
          error={!!hasError}
          helperText={formState.errors[name]?.message}
          variant={variant}
          size={size}
          style={style}
          inputProps={{ style: { fontSize: 20 } }}
        />
      )}
    />
  )
}

export default InputField
