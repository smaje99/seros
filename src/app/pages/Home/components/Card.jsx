import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import routes from 'Helpers/routes';

import '../styles/Card.css';

const Card = ({ name, path, icon, description }) => {
    return (
        <li className="card-content">
            <div className="card">
                <div className="card__side card__side--front">
                    <div className="card__body">
                        <img
                            src={icon}
                            alt="temática"
                            loading="lazy"
                            className="card--icon img-shadow"
                        />
                        <span className="card--name">{name}</span>
                    </div>
                </div>
                <div className="card__side card__side--back">
                    <div className="card__body">
                        <p className="card--description">{description}</p>
                        <Link className="card--path link" to={routes.thematic(path)}>
                            Ver más
                        </Link>
                    </div>
                </div>
            </div>
        </li>
    )
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default Card;