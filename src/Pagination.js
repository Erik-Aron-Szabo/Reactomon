import React from 'react'

export default function Pagination({ switchNextPage, switchPrevPage }) {
  return (
    <div>
      {/* if ____ = true ---> && */}
      {switchPrevPage && <button id="nextPrev" onClick={switchPrevPage}>Previous</button>}
      {switchNextPage && <button id="nextPrev" onClick={switchNextPage}>Next</button>}
      
    </div>
  )
}
