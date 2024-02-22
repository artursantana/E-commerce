

import React from 'react'
import Hero from '../../components/hero/Hero'
import Popular from '@/components/popular/Popular'
import Offers from '@/components/offers/Offers'
import NewCollections from '@/components/newcollections/NewCollections'


const Shop = () => {

  
  return (
    <div>
      <Hero/>
      <NewCollections/>
      <Offers/>
      <Popular/>
    </div>
  )
}

export default Shop
