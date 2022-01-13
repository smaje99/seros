import { useCallback, useEffect, useRef } from 'react';
import { NavLink } from "react-router-dom";

import MenuModal from 'Components/MenuModal';
import SearchBar from 'Components/SearchBar';

import useModal from 'Hooks/useModal';

import menuList from 'Helpers/menuList';
import routes from 'Helpers/routes';
import { scrollTo, scrollTop, eventScroll } from 'Utils/scroll';
import screen, { eventResize } from 'Utils/screen';

import SEROS from 'Images/seros.svg';

import './style.css';

const Navigation = () => {
    const navbarRef = useRef();
    const burgerRef = useRef();

    const [isOpenModal, openModal, closeModal] = useModal();

    const handleScrollToUp = () => scrollTop() && scrollTo();

    const handleScrollBorder = useCallback(() => {
        if (scrollTop() > 30) {
            navbarRef.current.classList.add('navbar--border');
        } else {
            navbarRef.current.classList.remove('navbar--border');
        }
    }, [])

    const handleBurger = () => {
        burgerRef.current.classList.toggle('open')
            ? openModal()
            : closeModal()
    }

    const handleCloseBurger = () => isOpenModal && handleBurger();

    const handleBrand = () => {
        handleScrollToUp();
        handleCloseBurger();
    }

    const handleResizeScreenWidth = () => {
        if (screen.width() > 880) {
            closeModal();
            burgerRef.current.classList.remove('open');
        }
    }

    useEffect(() => eventScroll(handleScrollBorder), [handleScrollBorder]);

    useEffect(() => eventResize(handleResizeScreenWidth), []);

    return (
        <>
            <nav className="navbar fixed" ref={navbarRef}>
                <NavLink
                    className="navbar__brand link"
                    to={routes.home}
                    onClick={handleBrand}
                >
                    <img
                        src={SEROS}
                        alt="Logotipo SEROS"
                        className="navbar__brand--logo img-shadow"
                    />
                    <span className="navbar__brand--brand">
                        SEROS
                    </span>
                </NavLink>

                <ul className="navbar__nav list">
                    {menuList.map(({name, route}) => (
                        <li className="navbar__nav--item" key={name}>
                            <NavLink className="navbar__link link list-item" to={route}>
                                {name}
                            </NavLink>
                        </li>
                    ))}

                    <li className="navbar__nav--item">
                        <div className="navbar__nav--vertical-separator"></div>
                    </li>
                    <li className="navbar__nav--item">
                        <NavLink
                            className="navbar__user--login navbar__link link list-item"
                            to={routes.login}
                            onClick={handleCloseBurger}
                        >
                            Iniciar Sesión
                        </NavLink>
                    </li>
                    <li className="navbar__nav--item">
                        <SearchBar activate staticComponent noFocus />
                    </li>
                    <li className="navbar__nav--item" ref={burgerRef}>
                        <div className="navbar__burger" onClick={handleBurger}></div>
                    </li>
                </ul>
            </nav>

            <MenuModal isOpen={isOpenModal} close={handleCloseBurger} />
        </>
    )
}

export default Navigation;