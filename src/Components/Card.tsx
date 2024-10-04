import React from 'react'
import Movie from '../app/Types'
import Link from 'next/link'
import Image from 'next/image'
import { FaRegThumbsUp } from "react-icons/fa";
interface Cardprops{
    result: Movie
}

function Card({result}:{result:Movie}) {
  return (
    <div className = 'group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200'>
        <Link href = {`/movie/${result.id}`}>
                <Image src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`} 
                width={500}
                height={300}
                className = 'sm:rounded-t-lg group-hover:opacity-40 transition-opacity duration-300'
                alt ='Image'>
                </Image>
                <div className = 'p-2'>
                    <p className= 'line-clamp-2 text-md'>{result.overview}</p>
                    <h2 className = 'text-lg font-bold truncate'>
                        {result.title || result.name}
                    </h2>
                    <p className = 'flex gap-4 items-center justify-center'>
                        {result.release_date || result.first_air_date}
                        <FaRegThumbsUp className = 'h-5 mr-1 ml-3'/>
                        {result.vote_count}

                    </p>
                </div>
        </Link>
    </div>
  )
}

export default Card