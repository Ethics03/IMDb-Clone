'use client'

import React,{useState} from 'react'
import { useRouter } from 'next/navigation'
import { SyntheticEvent } from 'react'

function Search() {

    const [search,setParam] = useState('')
    const Router = useRouter();
    const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault(); // to prevent from refreshing
        Router.push(`/search/${search}`)
        

    }

  return (
    <form className = 'flex justify-between px-5 max-w-6xl mx-auto' onSubmit={handleSubmit}>
        <input name = "search" type = 'text' placeholder ='Search Movies..' className='w-full h-14 rounded-md placeholder-gray-500 outline-none bg-transparent flex-1'
        onChange={(e) => setParam(e.target.value)}
        />
        <button className = 'text-amber-600 disabled:text-gray-100' disabled={search === ''}>Search</button>
    </form>
  )
}

export default Search;
