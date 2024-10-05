import Results from '../Components/Results'
import { Inter } from 'next/font/google';

const API_KEY = process.env.API_KEY;
interface SearchParams{
  genre: string
}

const inter = Inter({
  subsets: ['latin'],
  weight: ['400','700'],
})

 export default async function Home({searchParams}:{searchParams:SearchParams}) {



  const genre = searchParams.genre || 'fetchTrending';

    const res = await fetch(
      `https://api.themoviedb.org/3${
        genre === `fetchTopRated` ? `/movie/top_rated` : `/trending/all/day`}?api_key=${API_KEY}&
        language=en-US&page=1`
      
    );
    
    const data = await res.json();
    if(!res.ok){
      throw new Error('Failed to Fetch');
    }
    
      const results = data.results;
     
    

  return (  

    


  <div className = {inter.className}>
      <Results results= {results}/>
   </div>
  )
}

