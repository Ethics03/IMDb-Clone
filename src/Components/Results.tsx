import React from 'react'
import Card from '../Components/Card'

interface Movie {
    backdrop_path?: string | null; 
    id: number;
    title: string;
    original_title?: string; // Optional property
    overview?: string; // Optional property
    poster_path?: string | null; 
    media_type: 'movie' | 'tv'; 
    adult: boolean;
    original_language: string;
    genre_ids: number[]; 
    popularity: number;
    release_date: string; 
    video: boolean;
    vote_average: number;
    vote_count: number;
    origin_country?: string[]; // Optional property
  }

  type res = Movie[]


function Results({results}:{results:res}) {
  return(

  <div className = 'sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl m-auto'>
    {results.map((result)=>(
        <div key ={result.id}>
            <Card key={result.id} result={result}/>
        </div>
  ))}
   </div>
  )
 
}

export default Results