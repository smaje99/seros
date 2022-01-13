import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';

import SearchBar from 'Components/SearchBar';

import menuList from 'Helpers/menuList';

import './style.css';

const MenuModal = ({ isOpen, close }) => {
    return (
        <ReactModal isOpen={isOpen} className="menu-modal">
            <div className="menu-modal__search">
                <SearchBar activate staticComponent noFocus/>
            </div>
            <ul className="menu-modal__menu list">
                {menuList.map(({name, route}) => (
                    <li className="menu-modal__menu--item" key={name}>
                        <Link
                            className="menu-modal__link link list-item"
                            to={route}
                            onClick={close}
                        >
                            {name}
                        </Link>
                    </li>
                ))}
            </ul>
        </ReactModal>
    )
}

MenuModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired
}

export default MenuModal;