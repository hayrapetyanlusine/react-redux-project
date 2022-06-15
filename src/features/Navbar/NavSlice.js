import './Nav.scss';
import { useRef } from 'react';
import { Basket } from '../Svg';
import logoImg from'../Images/logo.jpg';
import { NavSliceItem } from './NavSliceItem';
export {logoImg};

export const initialNav = {
    img: {
        src: logoImg,
        path: "#"
    },
    menu: [{
        id: Math.random(),
        name: "Home",
        path: "#"
    }, {
        id: Math.random(),
        name: "Product",
        path: "#",
        submenu: [
            {
                name: "Dark Chocolate",
                id: Math.random(),
                path: "#"
            },
            {
                name: "Milk Chocolate",
                id: Math.random(),
                path: "#"
            },
            {
                name: "No Sugar Chocolate",
                id: Math.random(),
                path: "#"
            }
        ]
    }, {
        id: Math.random(),
        name: "History",
        path: "#"
    }, {
        id: Math.random(),
        name: "Blogs",
        path: "#"
    }, {
        id: Math.random(),
        name: "Contact",
        path: "#"
    }],
    basket: 0
}

export function SelectName(state) {
    return state;
}

export function BasketReducer(state={}, action) {
    if(action.type === "add-basket") {
        
    }
    return state;
}

export function NavComp() {
    const ulRef = useRef();

    return (
        <section className="nav-container">
            <div className='logo'>
                <a href='#'>
                    <img src={initialNav.img.src} alt="logo"/>
                </a>
            </div>
            <div className='open-menu' onClick={(e) => {
                e.preventDefault();
                ulRef.current.classList.add("mobile-menu");
            }}>
                <span></span>
            </div>
            <NavSliceItem ulRef={ulRef} initialNav={initialNav}/>
            <div className='basket'>
                <Basket/>
            </div>
        </section>
    )
}
