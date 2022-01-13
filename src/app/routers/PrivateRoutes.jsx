import { Navigate, Outlet, useLocation } from 'react-router-dom';

import useAuth from 'Auth/useAuth';
import routes from 'Helpers/routes';

const PrivateRoutes = () => {
    const location = useLocation();
    const { isLogged } = useAuth();

    if (!isLogged())
        return <Navigate to={routes.login} replace state={{ from: location }} />;

    return <Outlet />;
}

export default PrivateRoutes;