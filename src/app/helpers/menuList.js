import routes from 'Helpers/routes';

class MenuItem {
    constructor(name, route) {
        this.name = name;
        this.route = route;
    }
}

const menuList = [
    new MenuItem('Apuntes', routes.notes),
    new MenuItem('Acerca de', routes.about)
];

export default menuList;