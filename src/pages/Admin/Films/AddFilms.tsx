import TodoForm from '../../../components/TodoForm'

export default function AddFilm() {
  const handleTodoFormSubmit = (values: string) => {
    console.log('Form submit:', values)
  }

  return (
    <div>
      <h3 className='font-[600] text-[2.4rem]'>THÊM MỚI PHIM</h3>
      <TodoForm onsubmit={handleTodoFormSubmit} />
    </div>
  )
}
