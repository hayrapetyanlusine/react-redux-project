import './Nav.scss';
import { useRef } from 'react';
import { Basket } from '../Svg';
import logoImg from'../Images/logo.jpg';
import { NavSliceItem } from './NavSliceItem';
import { Link } from 'react-router-dom';
export {logoImg};

export const initialNav = {
    img: {
        src: logoImg,
        path: "/home"
    },
    menu: [{
        id: Math.random(),
        name: "Home",
        path: "/home"
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
        path: "/history"
    }, {
        id: Math.random(),
        name: "Blogs",
        path: "/blogs"
    }, {
        id: Math.random(),
        name: "Contact",
        path: "/contact"
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
    const menuCover = useRef();

    return (
        <section className="nav-container">
            <div className='logo'>
                <Link to={initialNav.img.path}>
                    <img src={initialNav.img.src} alt="logo"/>
                </Link>
            </div>
            <div className='open-menu' onClick={(e) => {
                e.preventDefault();
                ulRef.current.classList.add("mobile-menu");
                menuCover.current.classList.add("mobile-menu-cover");
            }}>
                <span></span>
                <div ref={menuCover}></div>
            </div>
            <NavSliceItem ulRef={ulRef} menuCover={menuCover} initialNav={initialNav}/>
            <div className='basket'>
                <Basket/>
            </div>
        </section>
    )
}