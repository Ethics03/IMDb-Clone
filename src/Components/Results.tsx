import React from 'react'

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

  <>
    {results.map((result:any)=>(
        <div key ={result.id}>
            <h2>{result.title}</h2>
        </div>
  ))}
   </>
  )
 
}

export default Results