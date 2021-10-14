import { createContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const history = useHistory();

    const [user, setUser] = useState(null, AuthContext);

    const login = (userCredentials, fromLocation) => {
        setUser(userCredentials);
        fromLocation && fromLocation.push(fromLocation);
    }

    const logout = () => setUser(null);

    const isLogged = () => !!user;

    const contextValue = {
        user,
        isLogged,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}