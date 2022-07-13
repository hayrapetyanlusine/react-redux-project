import React, { useEffect, useRef } from 'react'
import { WindowUp } from '../Svg';
import "./ScrollUp.scss"

export function ScrollUp() {
    const btnRef = useRef("");

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY >= 600) {
                btnRef.current.classList.add("showBtn");
            } else{
                btnRef.current.classList.remove("showBtn");
            }
        });
    }, []);

    return (
        <div className='scroll-up' ref={btnRef} onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }}>
            <WindowUp/>
        </div>
    )
}