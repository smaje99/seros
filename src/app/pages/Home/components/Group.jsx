import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Card from 'Pages/Home/components/Card';

import { getThematicGroup } from 'Services/ThematicGroups';

import '../styles/Group.css';

const Group = ({ name }) => {
    const [title, setTitle] = useState('Thematic')
    const [group, setGroup] = useState([]);

    const getGroup = async () => {
        const thematicGroup = await getThematicGroup(name);
        setTitle(thematicGroup?.title);
        setGroup(thematicGroup?.group);
    }

    useEffect(getGroup, []);

    return (
        <section className="group">
            <h2 className="group--title">{title}</h2>
            <ul className="group__content list">
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