import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import PrivateRoutes from './PrivateRoutes';

import Layout from 'Components/Layout';
import { Spinner } from 'Components/Preloaders';

const About = lazy(() => import('Pages/About'));
const Home = lazy(() => import('Pages/Home'));
const Login = lazy(() => import('Pages/Login'));
const Notes = lazy(() => import('Pages/Notes'));
import NotFoundPage from 'Pages/NotFoundPage';
const Register = lazy(() => import('Pages/Register'));
const Thematic = lazy(() => import('Pages/Thematic'));

const AppRouter = () => (
    <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={
                <Suspense fallback={<Spinner />}>
                    <Home />
                </Suspense>
            } />
            <Route path="login" element={
                <Suspense fallback={<Spinner />}>
                    <Login />
                </Suspense>
            } />
            <Route path="register" element={
                <Suspense fallback={<Spinner />}>
                    <Register />
                </Suspense>
            } />
            <Route path="about" element={
                <Suspense fallback={<Spinner />}>
                    <About />
                </Suspense>
            } />
            <Route path="thematic" element={
                <Suspense fallback={<Spinner />}>
                    <Thematic />
                </Suspense>
            } />

            <Route element={<PrivateRoutes />}>
                <Route path="notes" element={
                    <Suspense fallback={<Spinner />}>
                        <Notes />
                    </Suspense>
                } />
            </Route>

            <Route path="*" element={<NotFoundPage />} />
        </Route>

    </Routes>
);

export default AppRouter;