import FavouriteRecipe from '@/components/favourite/FavouriteRecipe'
import Hero from '@/components/recipeMaker/Hero'
import React from 'react'

const Favourite = () => {
  return (
    <div className='container'>
        <Hero />
        <FavouriteRecipe />
    </div>
  )
}

export default Favourite