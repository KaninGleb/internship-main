'use client'

import React, { useState } from 'react'
import { Select } from '@/common/components/Pagination/Select/Select'
import { Icon } from '@/common/components'


export type PaginationProps = {
  page?: number
  totalCount: number
  onChange: (page: number, count: number) => void
  siblingCount?: number
}
  const elementsPerPage = [
    { id: 1, value: 10 },
    { id: 2, value: 20 },
    { id: 3, value: 30 },
    { id: 4, value: 50 },
    { id: 5, value: 100 },
  ]
  const DEFAULT_ELEMENTS_PER_PAGE = 100
  const DOTS = '…'

export const Pagination: React.FC<PaginationProps> = (
  {
    page = 1,
    totalCount,
    onChange,
    siblingCount = 5,
  }) => {
  const [currentPage, setCurrentPage] = useState<number>(page)
  const [currentElementsRerPage, setCurrentElementsPerPage] = useState<number>(DEFAULT_ELEMENTS_PER_PAGE)

  const pages = Math.ceil(totalCount / currentElementsRerPage)

  const handlePageClick = (page: number) => {
    const next = Math.min(Math.max(1, page), pages)
    setCurrentPage(next)
    onChange?.(page, currentElementsRerPage)
  }

  const handleElementsPerPageSelection = (elCount: number) => {
    setCurrentElementsPerPage(elCount)
    onChange?.(currentPage, elCount)
  }
  const renderPages = () => {
    const neighbors = Math.max(1, siblingCount) - 1;
    const pagesToRender = [];

    pagesToRender.push(1);

    if (currentPage - neighbors > 2) {
      pagesToRender.push('...');
    }

    for (
      let i = Math.max(2, currentPage - neighbors);
      i <= Math.min(pages - 1, currentPage + neighbors);
      i++
    ) {
      pagesToRender.push(i);
    }

    if (currentPage + neighbors < pages - 1) {
      pagesToRender.push('...');
    }

    if (pages > 1) {
      pagesToRender.push(pages);
    }
    return pagesToRender;
  };

  const displayPages = renderPages();
  return (
    <div className={'flex items-center gap-2 text-white'}>
      <button
        className={'h-px-20 min-w-[20px]'}
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <Icon iconId='arrow-ios-back' color={'white'} size={14}/>
      </button>

      {Array.from({ length: displayPages.length }).map((_, i) => {
        const value = displayPages[i]

        if (value === DOTS) {
          return (
            <span key={`dots-${i}`} className='px-2 text-gray-400 select-none'>
              {DOTS}
            </span>
          )
        }
        return (
          <button
            key={i}
            onClick={() => handlePageClick(value as number)}
            className={`flex border border-transparent px-3 py-1 text-sm transition-colors ${
              value === currentPage
                ? 'bg-white font-semibold text-black'
                : 'bg-transparent font-normal text-white hover:border-blue-500'
            }`}
          >
            {value}
          </button>
        )
      })}

      <button
        className={'h-px-20 min-w-[20px]'}
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === pages}
      >
        <Icon iconId='arrow-ios-forward' color={'white'} size={14} />
      </button>
      <div className='ml-4 flex items-center gap-2'>
        <span className={'flex text-sm'}>Show</span>
        <Select
          className={`rounded border border-zinc-700 bg-zinc-900 px-2 py-1 text-sm focus:outline-none`}
          options={elementsPerPage}
          onChangeOption={handleElementsPerPageSelection}
          value={currentElementsRerPage}
        />
        <span className={'flex text-sm'}>on page</span>
      </div>
    </div>
  )
  }

