import React from 'react'
import { Button, Upload, UploadProps, message } from 'antd'
import { IInputField } from '../../../@types/Input'
import { UploadOutlined } from '@ant-design/icons'

function PhotoField({ form, name, setImageBase64 }: IInputField) {
  const props: UploadProps = {
    name: 'file',
    action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
    headers: {
      authorization: 'authorization-text'
    },
    async onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList)
      }
      if (info.file.status === 'done') {
        try {
          // Đọc file ảnh và chuyển thành dữ liệu base64
          const base64Data = await getBase64(info.file.originFileObj as File)
          if (setImageBase64) {
            setImageBase64(base64Data)
          }
          // Do something with the base64 data, for example, send it to the server
        } catch (error) {
          console.error('Error converting to base64:', error)
        }
        message.success(`${info.file.name} file uploaded successfully`)
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`)
      }
    }
  }

  const getBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = () => resolve(reader.result as string)
      reader.onerror = (error) => reject(error)
      reader.readAsDataURL(file)
    })
  }



  return (
    <Upload {...props}>
      <Button icon={<UploadOutlined />}>Click to Upload</Button>
    </Upload>
  )
}

export default PhotoField
