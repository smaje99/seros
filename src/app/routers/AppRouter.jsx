import { Routes, Route } from 'react-router-dom';

import PrivateRoutes from './PrivateRoutes';

import Layout from 'Components/Layout';

import About from 'Pages/About';
import Home from 'Pages/Home';
import Login from 'Pages/Login';
import Notes from 'Pages/Notes';
import NotFoundPage from 'Pages/NotFoundPage';
import Register from 'Pages/Register';
import Thematic from 'Pages/Thematic';

const AppRouter = () => (
    <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="about" element={<About />} />
            <Route path="thematic" element={<Thematic />} />

            <Route element={<PrivateRoutes />}>
                <Route path="notes" element={<Notes />} />
            </Route>

            <Route path="*" element={<NotFoundPage />} />
        </Route>

    </Routes>
);

export default AppRouter;