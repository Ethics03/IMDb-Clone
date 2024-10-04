import React from 'react'




function Results({results}:{results:any}) {
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