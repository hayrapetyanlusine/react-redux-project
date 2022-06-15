import React from 'react';
import './Nav.scss';

export function DropDown({initialNav}) {
    const filteredMenu = initialNav.menu.filter(item => item.submenu !== undefined);
    return (
        <ul className="drop-down">
            {
                filteredMenu[0].submenu.map(item => {
                    return(
                        <li key={item.id}><a href='#'>{item.name}</a></li> 
                    )
                })
            }
        </ul>
    )
}