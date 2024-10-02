import React , {Suspense} from 'react'
import NavbarItem from './NavbarItem'
function Navbar() {
  return (

    <Suspense fallback={<div>Loading menu....</div>}>
    <div className = 'flex dark:bg-gray-600 bg-amber-100 p-4 lg:text-lg justify-center gap-4'>
        <NavbarItem title = "Trending" param="fetchTrending" />
       <NavbarItem title = "Top Rated" param="fetchTopRated"/>
       
    </div>
    </Suspense>
  )
}
 
export default Navbar