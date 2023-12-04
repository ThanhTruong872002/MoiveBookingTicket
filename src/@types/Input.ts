import { CSSProperties } from '@material-ui/core/styles/withStyles'
import { UseFormReturn } from 'react-hook-form'

export interface IInputField {
  form: UseFormReturn<
    {
      tenPhim: string
      trailer: string
      moTa: string
      ngayKhoiChieu: Date
      dangChieu: boolean
      sapChieu: boolean
      hot: boolean
      danhGia: number
      hinhAnh?: string | undefined
    },
    any,
    undefined
  >
  setImageBase64?: React.Dispatch<React.SetStateAction<string>> | undefined

  name: 'tenPhim' | 'trailer' | 'moTa' | 'ngayKhoiChieu' | 'dangChieu' | 'sapChieu' | 'danhGia' | 'hot' | 'hinhAnh'
  label?: string
  disable?: boolean
  variant?: 'outlined' | 'standard' | 'filled' | undefined
  size?: 'small' | 'medium'
  style?: CSSProperties | undefined
}
