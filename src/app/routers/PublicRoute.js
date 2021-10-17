import { Route, Redirect } from 'react-router-dom';

import useAuth from 'Auth/useAuth';
import routes from 'Helpers/routes';

const PublicRoute = (props) => {
    const { isLogged } = useAuth();

    if (isLogged()) return <Redirect to={routes.home} />;

    return <Route {...props} />;
}

export default PublicRoute;
