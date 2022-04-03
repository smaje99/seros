import { Outlet } from 'react-router-dom';

import Navigation from "Components/Navigation";

import './style.css';

const Layout = () => {
    return (
        <div className="layout">
            <Navigation />
            <Outlet />
        </div>
    )
}

export default Layout;