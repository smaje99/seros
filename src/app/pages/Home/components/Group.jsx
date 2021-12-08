import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Card from 'Pages/Home/components/Card';

import '../styles/Group.css';

const API = process.env.API;

const Group = ({ name }) => {
    const [title, setTitle] = useState('Thematic')
    const [group, setGroup] = useState([]);

    const getGroup = async () => {
        const res = await fetch(`${API}/thematicGroups/${name}`);
        const data = await res.json();
        setTitle(data.title);
        setGroup(data.group);
    }

    useEffect(getGroup, []);

    return (
        <section className="group">
            <h2 className="group--title">{title}</h2>
            <ul className="group__content">
                {group.map(thematic => (
                    <Card {...thematic} key={thematic.name} />
                ))}
            </ul>
        </section>
    )
}

Group.prototype = {
    title: PropTypes.string.isRequired,
    group: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        path: PropTypes.string,
        icon: PropTypes.string,
        description: PropTypes.string
    })).isRequired
}

export default Group;