import Sidebar from '@/components/Sidebar'
import HealthFitness from '@/pages/HealthFitness'
import React from 'react'
import '../../styles/recipe-maker.css'

const page = () => {
  return (
    <div>
        <Sidebar page={'Health & Fitness'} />
        <HealthFitness />
    </div>
  )
}

export default page