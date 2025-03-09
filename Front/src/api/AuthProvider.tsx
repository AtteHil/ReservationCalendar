import React, { createContext, useState, useContext } from "react";
interface AuthContextType {
    accessToken: string | null;
    login: (username: string, password: string) => Promise<void>;
    fetchProtectedData: () => Promise<any>;
  }
  const AuthContext = createContext<AuthContextType | undefined>(undefined);

  interface AuthProviderProps {
    children: React.ReactNode;
  }

  export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => { // auth provider to wrap other components in
    const [accessToken, setAccessToken] = useState<string | null>(null); // provides access token to other components and functions suhc as login and get reservations
    const login = async (username: string, password: string) => {
        try {
            const response = await fetch("http://localhost:3000/user/login", {
                method: "POST",
                credentials: "include", 
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
              });
        
              if (!response.ok) throw new Error("Login failed");
        
              const data = await response.json();
              setAccessToken(data.accessToken);
            } catch (error) {
              console.error("Login failed:", error);
            }
      };
      const fetchProtectedData = async () => {
        try {
          const response = await fetch("http://localhost:3000/reservations/getReservations", {
            method: "GET",
            
          });
    
          if (!response.ok) throw new Error("Failed to fetch data");
    
          return await response.json();
        } catch (error) {
          console.error("Error fetching protected data:", error);
          throw error;
        }
      };
      return (
        <AuthContext.Provider value={{ accessToken, login, fetchProtectedData }}>
          {children}
        </AuthContext.Provider>
      );
  }
    export const useAuth = () => {
        const context = useContext(AuthContext);
        if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
        }
        return context;
    };