import PropTypes from 'prop-types';
import { useState, useEffect, useRef, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './style.css';

const SearchBar = ({ activate, staticComponent, noFocus }) => {
    const [active, setActive] = useState(!!activate);
    const [query, setQuery] = useState('');

    const searchBarRef = useRef();
    const inputRef = useRef();
    const labelRef = useRef();
    const focusRef = useRef(!!noFocus);

    const className = (modifier, element) => (`search-bar--${modifier}${element}`);

    const classNameIconOrBar = useCallback(() => {
        if (active) {
            searchBarRef.current.className = className('bar', '');
            labelRef.current.className = className('bar', '__icon');
            inputRef.current.className = className('bar', '__input');
            if (!focusRef.current) {
                inputRef.current.focus();
                focusRef.current = false;
            }
        } else {
            searchBarRef.current.className = className('icon', '');
            labelRef.current.className = className('icon', '__icon');
            inputRef.current.className = className('icon', '__input');
        }
    }, [active])

    const activeBar = useCallback(e => (
        !staticComponent && setActive(e)
    ), [staticComponent]);

    const handleActiveBar = () => activeBar(!active);

    useEffect(() => activeBar(!!activate), [activate, activeBar]);

    useEffect(classNameIconOrBar, [classNameIconOrBar]);

    return (
        <form ref={searchBarRef}>
            <input
                id="search"
                type="text"
                ref={inputRef}
                placeholder="Buscar en SEROS"
                onChange={e => setQuery(e.target.value)}
                onBlur={handleActiveBar}
                required
            />
            <label
                for="search"
                ref={labelRef}
                onClick={handleActiveBar}
            >
                <FontAwesomeIcon icon={faSearch} />
            </label>
        </form>
    )
}

SearchBar.propTypes = {
    activate: PropTypes.bool,
    staticComponent: PropTypes.bool,
    noFocus: PropTypes.bool
}

export default SearchBar;