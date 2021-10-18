import { BrowserRouter as Router } from 'react-router-dom';

import AppRouter from 'Routers/AppRouter';
import { AuthProvider } from 'Auth/AuthProvider';
import Layout from 'Components/Layout';

const App = () => (
    <>
        <Router>
            <AuthProvider>
                <Layout>
                    <AppRouter />
                </Layout>
            </AuthProvider>
        </Router>
    </>
);

export default App;