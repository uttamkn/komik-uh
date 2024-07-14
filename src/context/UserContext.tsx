import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { getToken } from "../api/auth";
import { User } from "../api/types";

const UserContext = createContext<any>({});

export function UserContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/auth/user", {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      .then((response: any) => {
        setUser({
          id: response.data.id,
          username: response.data.username,
          email: response.data.email,
        });
      })
      .catch(() => {
        console.log("Error fetching user");
        setUser(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const updateUser = (userData: User) => {
    setUser(userData);
  };

  return (
    <UserContext.Provider value={{ user, loading, updateUser }}>
      {children}
    </UserContext.Provider>
  );
}

// Custom hook to use the user context (user, updateUser and loading state)
export const useAuth = () => useContext(UserContext);
