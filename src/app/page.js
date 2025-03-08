import Sidebar from '@/components/Sidebar'
import Home from '@/pages/Home'
import React from 'react'

const page = () => {
  return (
    <div>
      <Sidebar page={'Chefff'} />
      <Home />
    </div>
  )
}

export default page