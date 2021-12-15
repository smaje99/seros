const dynamicRoute = (route, routeId) => (
    routeId ? `/${route}/${routeId}` : `/${route}/:${route}Id`
)

const routes = {
    home: '/',
    login: '/login',
    register: '/register',
    account: '/account',
    notes: '/notes',
    about: '/about',
    thematic: (thematicId) => dynamicRoute('thematic', thematicId)
}

export default routes;