import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import routes from 'Helpers/routes';

import '../styles/Card.css';

const Card = ({ name, path, icon, description }) => {
    return (
        <div className="card-content">
            <div className="card">
                <div className="card__side card__side--front">
                    <img
                        src={icon}
                        alt="temática"
                        className="card--icon img-shadow"
                    />
                    <span className="card--name">{name}</span>
                </div>
                <div className="card__side card__side--back">
                    <p className="card--description">{description}</p>
                    <Link className="card--path link" to={routes.thematic(path)}>
                        Ver más
                    </Link>
                </div>
            </div>
        </div>
    )
}

Card.propTypes = {
    thematic: PropTypes.shape({
        name: PropTypes.string,
        path: PropTypes.string,
        icon: PropTypes.string,
        description: PropTypes.string
    })
}

export default Card;