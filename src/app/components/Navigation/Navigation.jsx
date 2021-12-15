import { useCallback, useEffect, useRef } from 'react';
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import SearchBar from 'Components/SearchBar';

import routes from 'Helpers/routes';
import { scrollTo, scrollTop, eventScroll } from 'Utils/scroll';

import SEROS from 'Images/seros.svg';

import './style.css';

const Navigation = ({ openModal, closeModal }) => {
    const navbarRef = useRef();

    const burgerRef = useRef();

    const handleScrollToUp = () => scrollTop() && scrollTo();

    const handleScrollBorder = useCallback(() => {
        if (scrollTop() > 30) {
            navbarRef.current.classList.add('navbar--border');
        } else {
            navbarRef.current.classList.remove('navbar--border');
        }
    }, [])

    useEffect(() => eventScroll(handleScrollBorder), [handleScrollBorder]);

    const handleBurger = () => {
        burgerRef.current.classList.toggle('open')
            ? openModal()
            : closeModal()
    }

    return (
        <nav className="navbar fixed" ref={navbarRef}>
            <NavLink
                className="navbar__brand link"
                to={routes.home}
                onClick={handleScrollToUp}
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
                <li className="navbar__nav--item">
                    <NavLink className="navbar__link link" to={routes.notes}>
                        Apuntes
                    </NavLink>
                </li>
                <li className="navbar__nav--item">
                    <NavLink className="navbar__link link" to={routes.about}>
                        Acerca de
                    </NavLink>
                </li>
                <li className="navbar__nav--item">
                    <div className="navbar__nav--vertical-separator"></div>
                </li>
                <li className="navbar__nav--item">
                    <NavLink
                        className="navbar__user--login navbar__link link"
                        to={routes.login}
                    >
                        Iniciar Sesión
                    </NavLink>
                </li>
                <li className="navbar__nav--item">
                    <SearchBar activate staticComponent noFocus />
                </li>
                <li className="navbar__nav--item" ref={burgerRef}>
                    <div className="navbar__burger" onClick={handleBurger}>
                    </div>
                </li>
            </ul>
        </nav>
    )
}

Navigation.propTypes = {
    openModal: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired
}

export default Navigation;