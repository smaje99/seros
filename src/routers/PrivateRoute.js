import { Route, Redirect, useLocation } from 'react-router-dom';

import useAuth from '../auth/useAuth';
import routes from '../helpers/routes';

const PrivateRoute = (props) => {
    const location = useLocation();
    const { isLogged } = useAuth();

    if (!isLogged) return <Redirect to={{
        pathname: routes.login,
        state: { from: location }
    }} />;

    return <Route {...props} />;
}

export default PrivateRoute;
