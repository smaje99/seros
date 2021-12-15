import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';

import SearchBar from 'Components/SearchBar';

import routes from 'Helpers/routes';

import './style.css';

const MenuModal = ({ isOpen }) => {
    return (
        <ReactModal isOpen={isOpen} className="menu-modal">
            <div className="menu-modal__search">
                <SearchBar activate staticComponent noFocus/>
            </div>
            <ul className="menu-modal__menu list">
                <li className="menu-modal__menu--item">
                    <Link className="menu-modal__link link list-item" to={routes.notes}>
                        Apuntes
                    </Link>
                </li>
                <li className="menu-modal__menu--item">
                    <Link className="menu-modal__link link list-item" to={routes.about}>
                        Acerca de
                    </Link>
                </li>
            </ul>
        </ReactModal>
    )
}

MenuModal.propTypes = {
    isOpen: PropTypes.bool.isRequired
}

export default MenuModal;