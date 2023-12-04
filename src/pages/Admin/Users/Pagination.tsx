import { FC, ReactNode, useState } from 'react'

interface IPagination {
  count: number
  currentPage: number
  totalCount: number
  totalPage: number
  getListUsers: (index: number) => Promise<void>
}

const Pagination: FC<IPagination> = ({ count, currentPage, totalCount, totalPage, getListUsers }) => {
  const [activeButton, setActiveButton] = useState<number | null>(null)

  function PaginationButton() {
    const ListPage = []

    for (let i = 1; i <= totalPage - 30; i++) {
      ListPage.push(
        <button
          onClick={() => {
            getListUsers(i)
            setActiveButton(i)
          }}
          aria-current='page'
          className={`relative z-10 inline-flex items-center ${activeButton === i ? "bg-indigo-600" : "bg-black"}  px-4 py-2 text-md font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
        >
          {i}
        </button>
      )
    }
    return ListPage.length > 0 ? ListPage : null
  }

  console.log(totalPage)

  return (
    <div className='flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6'>
      <div className='flex flex-1 justify-between sm:hidden'>
        <a
          href='#'
          className='relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'
        >
          Previous
        </a>
        <a
          href='#'
          className='relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'
        >
          Next
        </a>
      </div>
      <div className='hidden sm:flex sm:flex-1 sm:items-center sm:justify-between'>
        <div>
          <p className='flex gap-2 text-md text-gray-700 font-[600]'>
            Showing
            <span className='font-medium'>1</span>
            to
            <span className='font-medium'>10</span>
            of
            <span className='font-medium'>{totalPage}</span>
            results
          </p>
        </div>
        <div>
          <nav className='isolate inline-flex -space-x-px rounded-md shadow-sm' aria-label='Pagination'>
            <a
              href='#'
              className='relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
            >
              <span className='sr-only'>Previous</span>
              <svg className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                <path
                  fill-rule='evenodd'
                  d='M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z'
                  clip-rule='evenodd'
                />
              </svg>
            </a>
            {PaginationButton()}
            <a
              href='#'
              className='relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
            >
              <span className='sr-only'>Next</span>
              <svg className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                <path
                  fill-rule='evenodd'
                  d='M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z'
                  clip-rule='evenodd'
                />
              </svg>
            </a>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Pagination
