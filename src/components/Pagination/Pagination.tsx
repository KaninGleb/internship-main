'use client'

import React, { useState } from 'react'
import { Select } from '@/components/Pagination/Select/Select'
import { Icon } from '@/components/Icon/Icon'

export type PaginationProps = {
  id?: string
  page?: number
  itemsCountForPage: number
  totalCount: number
  onChange: (page: number, count: number) => void
}

 const elementsPerPage = [
  {id: 1, value: 10},
  {id: 2, value: 20},
  {id: 3, value: 30},
  {id: 4, value: 50},
  {id: 5, value: 100},
]
const DEFAULT_ELEMENTS_PER_PAGE = 100;

export const Pagination: React.FC<PaginationProps> = (
  {
    page = 1,
    totalCount,
    onChange,
  }) => {
  const [currentPage, setCurrentPage] = useState<number>(page)
  const [currentElementsRerPage, setCurrentElementsPerPage] = useState<number>(DEFAULT_ELEMENTS_PER_PAGE)

  const handlePageClick = (page: number) => {
    setCurrentPage(page)
    onChange?.(page, currentElementsRerPage)
  }

  const handleElementsPerPageSelection = (elCount: number)=>{
    setCurrentElementsPerPage(elCount)
    onChange?.(currentPage, elCount)
  }

  const pages = Math.ceil(totalCount / currentElementsRerPage)

    return (
      <div className={'flex items-center gap-2 text-white'}>
        <button
          className={'min-w-[20px] h-px-20'}
          onClick={() => handlePageClick(currentPage - 1)}
          disabled={currentPage === 1}>
          <Icon
            iconId='arrow-ios-back' color={'white'} size={14} />
        </button>

        {Array.from({ length: pages }).map((_, i) => (
          <button
            key={i}
            onClick={() => handlePageClick(i + 1)}
            className={`flex px-3 py-1 rounded border border-transparent transition-colors text-sm ${
              i + 1 === currentPage
                ? 'bg-white text-black font-semibold'
                : 'bg-transparent text-white hover:border-blue-500 font-normal'
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          className={'min-w-[20px] h-px-20'}
          onClick={() => handlePageClick(currentPage + 1)} disabled={currentPage === pages}>
          <Icon iconId='arrow-ios-forward' color={'white'} size={14} />
        </button>
        <div className="flex items-center gap-2 ml-4">
          <span className={'flex text-sm'}>
            Show
          </span>
          <Select
            className={`bg-zinc-900 border border-zinc-700 px-0 py-0 focus:outline-none text-sm `}
            options={elementsPerPage}
            onChangeOption={handleElementsPerPageSelection}
            value={currentElementsRerPage}
          />
          <span className={'flex text-sm'}>
            on page
          </span>
        </div>
      </div>
    )
  }

