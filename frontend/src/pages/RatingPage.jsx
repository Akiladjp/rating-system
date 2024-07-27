import React from 'react'
import { LgBtn } from '../components/LgBtn'
import Rating from '../components/Rating'

const RatingPage = () => {
  return (
    <div>
        <div>
            <Rating />
            <Rating />
            <Rating />
        </div>
        <div>
            <LgBtn/>
        </div>
    </div>
  )
}

export default RatingPage