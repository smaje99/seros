import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Card from 'Pages/Home/components/Card';

import { getThematicGroup } from 'Services/ThematicGroups';

import '../styles/Group.css';

const Group = ({ name }) => {
    const [title, setTitle] = useState('Thematic')
    const [group, setGroup] = useState([]);
    const [error, setError] = useState('');

    const getGroup = async () => {
        const thematicGroup = await getThematicGroup(name);

        if (!thematicGroup?.err) {
            setTitle(thematicGroup?.title);
            setGroup(thematicGroup?.group);
        } else {
            setError(thematicGroup?.msg ?? 'Error');
        }
    }

    useEffect(getGroup, []);

    return (
        <section className="group">
            <h2 className="group--title">{title}</h2>
            {error
                ? <p className="group__content--error">{error}</p>
                : <ul className="group__content list">
                    {group.map(thematic => (
                        <Card {...thematic} key={thematic.name} />
                    ))}
                </ul>}
        </section>
    )
}

Group.prototype = {
    name: PropTypes.string
}

export default Group;