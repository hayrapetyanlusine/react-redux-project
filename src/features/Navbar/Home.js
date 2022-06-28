import React from 'react'
import { Main } from '../Main/Main'
import { Slider, chengeSlide, next, prev } from '../Slider/Slider'

export default function Home({slide, dispatch}) {
  return (
    <>
        <Slider slide={slide} 
            change={(val) => {dispatch(chengeSlide(val))}} 
            next={(nextSlide) => {dispatch(next(nextSlide))}} 
            prev={(prevSlide) => dispatch(prev(prevSlide))}
        />

        <div style={{ backgroundColor: "#f1f1f1"}}>
            <Main/>
        </div>
    </>
  )
}
