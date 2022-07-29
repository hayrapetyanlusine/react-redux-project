import React from 'react'
import { Main } from '../Main/Main'
import { Slider, next, prev } from '../Slider/Slider'

export default function Home({ wrapperRef, slide, dispatch}) {
  return (
    <>
        <Slider slide={slide} wrapperRef={wrapperRef} 
            next={(nextSlide) => {dispatch(next(nextSlide))}} 
            prev={(prevSlide) => dispatch(prev(prevSlide))}
        />

        <div style={{ backgroundColor: "#f1f1f1"}}>
            <Main/>
        </div>
    </>
  )
}
