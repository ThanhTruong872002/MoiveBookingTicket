import PropTypes from 'prop-types'
import InputField from '../Form-controls/InputField'
import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import SelectField from '../Form-controls/SelectField'
import { InputNumber } from 'antd'

import moment from 'moment'
import SwitchField from '../Form-controls/SwitchField'
import PhotoField from '../Form-controls/PhotoField'
import { useState } from 'react'

TodoForm.propTypes = {
  onsubmit: PropTypes.func
}

function TodoForm(props: any) {
  const schema = yup
    .object()
    .shape({
      tenPhim: yup.string().required('Bạn không được để trống mục này ').min(5, 'Tối thiểu 5 kí tự'),
      trailer: yup.string().required('Bạn không được để trống mục này').min(5, 'Tối thiểu 6 kí tự'),
      moTa: yup.string().required('Bạn không được để trống mục này').min(5, 'Tối thiểu 5 kí tự '),
      ngayKhoiChieu: yup.date().required('Bạn không được để trống mục này'),
      dangChieu: yup.boolean().required('Bạn không được để trống mục này'),
      sapChieu: yup.boolean().required('Bạn không được để trống mục này'),
      hot: yup.boolean().required('Bạn không được để trống mục này'),
      danhGia: yup.number().required('Bạn không được để trống mục này'),
      hinhAnh: yup.string()
    })
    .required()

  const form = useForm({
    defaultValues: {
      tenPhim: '',
      trailer: '',
      moTa: '',
      ngayKhoiChieu: new Date(),
      dangChieu: false,
      sapChieu: false,
      hot: false,
      danhGia: 0,
      hinhAnh: ''
    },
    resolver: yupResolver(schema)
  })

  const [imageBase64, setImageBase64] = useState('')

  console.log( imageBase64)

  const handleSubmit = (values: any) => {
    values = { ...values, ngayKhoiChieu: moment().subtract(10, 'days').calendar() }
    values = { ...values, hinhAnh: imageBase64 }
    const { onSubmit } = props
    if (onSubmit) {
      onSubmit(values)
    }

    form.reset()
    console.log('values', values)
  }

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <div className='mt-20 flex items-center gap-10'>
        <h2 className='w-[130px]'>Tên Phim</h2>
        <InputField
          form={form}
          name='tenPhim'
          label='Tên Phim'
          variant='outlined'
          size='medium'
          style={{ fontSize: '100px', width: '700px' }}
        />
      </div>
      <div className='my-10 flex items-center gap-10'>
        <h2 className='w-[130px]'>Trailer</h2>
        <InputField
          form={form}
          name='trailer'
          label='Trailer'
          variant='outlined'
          size='medium'
          style={{ fontSize: '100px', width: '700px' }}
        />
      </div>
      <div className='mb-10 flex items-center gap-10'>
        <h2 className='w-[130px]'>Mô Tả</h2>
        <InputField
          form={form}
          name='moTa'
          label='Mô Tả'
          variant='outlined'
          size='medium'
          style={{ fontSize: '100px', width: '700px' }}
        />
      </div>
      <div className='mb-10 flex items-center gap-10'>
        <h2 className='w-[135px]'>Ngày Khởi Chiếu</h2>
        <SelectField form={form} name='ngayKhoiChieu' />
      </div>
      <div className='mb-10 flex items-center gap-10'>
        <h2 className='w-[130px]'>Đang Chiếu </h2>
        <SwitchField form={form} name='dangChieu' />
      </div>
      <div className='mb-10 flex items-center gap-10'>
        <h2 className='w-[130px]'>Sắp Chiếu </h2>
        <SwitchField form={form} name='sapChieu' />
      </div>
      <div className='mb-10 flex items-center gap-10'>
        <h2 className='w-[130px]'>Hot</h2>
        <SwitchField form={form} name='hot' />
      </div>
      <div className='mb-10 flex items-center gap-10'>
        <h2 className='w-[130px]'>Đánh Giá </h2>
        <InputNumber />
      </div>
      <div className='mb-10 flex items-center gap-10'>
        <h2 className='w-[130px]'>Hình Ảnh</h2>
        <PhotoField setImageBase64={setImageBase64} name='hinhAnh' form={form} />
      </div>
      <button className='mt-10 w-[100px] h-[40px] bg-slate-400 cursor-pointer' type='submit'>
        Submit
      </button>
    </form>
  )
}

export default TodoForm
