import React from "react";
import { InputSearchProps } from "../types/types";

export default function InputSearch({searchQuery, onSearch, onInputChange} : InputSearchProps) {

  return (
    <div className="flex my-5 w-full">
      <input 
        type="text" 
        className="py-3 px-5 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500" 
        placeholder="Enter username"
        value={searchQuery}
        onChange={(e) => onInputChange(e.target.value)}
      />
      <button 
        type="button" 
        className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition-all text-sm ml-3"
        onClick={onSearch}
      >
        Search
      </button>
    </div>
  )
}
