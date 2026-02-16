import { useState, useEffect } from 'react';

export const useAuth = () => {
    // Estados principales
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Chequeo automático al cargar
    useEffect(() => {
        const token = localStorage.getItem('token');
        const storedUser = localStorage.getItem('user');

        if (token && storedUser) {
        setIsAuthenticated(true);
        setUser(JSON.parse(storedUser));
        }
        
        setLoading(false);
    }, []);

    // Login exitoso
    const login = (token, userData) => {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(userData));
        setIsAuthenticated(true);
        setUser(userData);
    };

    // Logout (botón salir)
    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setIsAuthenticated(false);
        setUser(null);
    };

    return { 
        isAuthenticated, 
        user, 
        loading, 
        login, 
        logout 
    };
};
