import { Route, Redirect } from 'react-router-dom';

import useAuth from '../auth/useAuth';
import routes from '../helpers/routes';

const PublicRoute = (props) => {
    const { isLogged } = useAuth();

    if (isLogged()) return <Redirect to={routes.home} />;

    return <Route {...props} />;
}

export default PublicRoute;
