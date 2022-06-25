import React from 'react';
import { useRef, useState } from 'react'
import { Down } from '../Svg';
import { DropDown } from './DropDown';
import { Up } from '../Svg'
import './Nav.scss';

export function NavSliceItem({ulRef, initialNav}) {
    const [down, setDown] = useState(false);
    const dropMenuRef = useRef();

    return (
        <ul className='menu-items' ref={ulRef}>
            <div className='close-menu' onClick={(e) => {
                e.preventDefault();
                ulRef.current.classList.remove("mobile-menu");
            }}>Close</div>
            {
                initialNav.menu.map(elem => {
                    if(elem.name === "Product") {
                        return(
                            <li id='drop' className='menu-item' key={elem.id} ref={dropMenuRef} onClick={() => {
                                dropMenuRef.current.classList.toggle("down");
                                setDown(!down);
                            }}>
                                <a href='#' className='item-href'>
                                    {elem.name} 
                                    <span>{down ? <Up/> : <Down/>}</span>
                                </a>
                                <DropDown initialNav={initialNav}/>
                            </li>
                        )
                    }
                    return <li className='menu-item' key={elem.id}> <a href='#' className='item-href'>{elem.name}</a></li>
                }) 
            }
        </ul>
    )
}