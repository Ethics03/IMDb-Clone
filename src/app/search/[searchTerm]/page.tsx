import Results from '@/Components/Results';
import React from 'react'

interface Params{
    searchTerm : string;
}

export default async function SearchPage({params}:{params:Params}) {
    const sTerm = params.searchTerm;
    const encodedSTerm = encodeURIComponent(sTerm);
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${encodedSTerm}&api_key=${process.env.API_KEY}&include_adult=false`);
    const data = await res.json();
    const results = data.results;
  return (
    <div>
        {
            results && results.length === 0 ? <h1 className = 'text-center pt-6'>No results Found</h1> :  <Results results = {results}/>
            

        } 

           

    </div>
  )
}
