import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../src/api/baseApi";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await api.get("/me");
        setUser(res.data.data);
        setIsAuthenticated(true);
        
        // eslint-disable-next-line no-unused-vars
      } catch (err) {
        setIsAuthenticated(false);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    // Inisial cek
    checkAuth();

    // Check ulang token setiap 5 menit
    const interval = setInterval(() => {
      checkAuth();
    }, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, user, setUser, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
