import { Switch, Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import About from 'Pages/About';
import Home from 'Pages/Home';
import Login from 'Pages/Login';
import Notes from 'Pages/Notes';
import NotFoundPage from 'Pages/NotFoundPage';
import Register from 'Pages/Register';
import Thematic from 'Pages/Thematic';

import routes from 'Helpers/routes';

const AppRouter = () => (
    <Switch>
        <PublicRoute exact path={routes.home} component={Home} />
        <PublicRoute exact path={routes.login} component={Login} />
        <PublicRoute exact path={routes.register} component={Register} />
        <PublicRoute exact path={routes.about} component={About} />
        <PublicRoute exact path={routes.thematic()} component={Thematic} />

        <PrivateRoute exact path={routes.notes} component={Notes} />

        <Route path="*" component={NotFoundPage} />
    </Switch>
);

export default AppRouter;
