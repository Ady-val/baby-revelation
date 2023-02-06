import React from 'react'
import { IoSearchOutline } from 'react-icons/io5'

export default function SearchHeader() {
  return (
    <div className="items-center bg-menu border border-grey-600 rounded text-ms h-8 w-64 px-1">
      <div className="flex">
        <button type="submit" className="m-1">
          <IoSearchOutline />
        </button>
        <input className="m-1" type="search" name="search" placeholder="Search for anything..." />
      </div>
    </div>
  )
}
