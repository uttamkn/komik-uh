import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const UserContext = createContext<any>({});

type Token = {
  access_token: string;
  token_type: string;
  user: any;
};

export function UserContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const tokenString = localStorage.getItem("user");
    let token: Token | null = null;

    if (tokenString) {
      try {
        token = JSON.parse(tokenString) as Token;
        // Validate the structure of the token
        if (!token["access_token"] || !token.token_type) {
          throw new Error("Invalid token structure");
        }
      } catch (error) {
        console.error("Failed to parse token:", error);
        token = null;
      }
    }

    if (!user) {
      axios
        .get("/user", {
          headers: {
            Authorization: `Bearer ${token?.access_token}`,
          },
        })
        .then(({ data }: { data: any }) => {
          setUser(data);
        })
        .catch(() => setUser(null))
        .finally(() => setLoading(false));
    }
  }, []);

  const updateUser = (userData: any) => {
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
