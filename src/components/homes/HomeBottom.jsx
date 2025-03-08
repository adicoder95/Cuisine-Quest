import React from 'react'
import shape from '../../assets/programshape.svg'
import chotpot from '../../assets/chotpot.svg'
import Image from 'next/image'
import shape2 from "../../assets/shape-2.svg"
import roast from '../../assets/roast.svg'

const HomeBottom = () => {
  return (
    <div className='container py-16'>
        <div className="program bg-[#860600] flex relative">
            <div className="card p-6 space-y-3">
                <h2 className='md:text-[22px] text-[18px] font-bold text-white'>Healthful Meal Program</h2>
                <button className='button-active'>Learn more</button>
            </div>
            <Image src={shape} width={353} height={353} alt='shape' className='' />
            <Image src={chotpot} alt='shape' className='meal absolute -top-5 right-10' />
        </div>
        <div className="program cuisine bg-[#D6D4D5] flex relative mt-20">
            <Image src={roast} alt='shape' className='-mt-7 -ml-1 cuisine-meal' />
            <div className="card p-6 space-y-3">
                <h2 className='md:text-[22px] text-[18px] font-bold text-[#64A67E]'>Michelin-level Cuisine</h2>
                <button className='button-active'>Learn more</button>
            </div>
            <Image src={shape2} width={353} height={353} alt='shape' className='ml-auto' />
        </div>
    </div>
  )
}

export default HomeBottom