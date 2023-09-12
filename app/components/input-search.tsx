import React from "react";
import { InputSearchProps } from "../types/types";
import {RiSearch2Line} from 'react-icons/ri';

export default function InputSearch({searchQuery, onSearch, onInputChange} : InputSearchProps) {

  return (
    <div className="flex my-5 w-full">
      <input 
        type="text" 
        className="py-3 px-5 block w-full border-gray-200 rounded-md text-sm drop-shadow-sm" 
        placeholder="Enter username"
        value={searchQuery}
        onChange={(e) => onInputChange(e.target.value)}
      />
      <button 
        type="button" 
        className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md drop-shadow-sm border-transparent font-semibold bg-sunflower text-white hover:bg-sunflower-darker focus:outline-none focus:ring-2 focus:ring-sunflower focus:ring-offset-1 transition-all text-sm ml-3"
        onClick={onSearch}
      >
        <RiSearch2Line className="text-xl"/>
      </button>
    </div>
  )
}
