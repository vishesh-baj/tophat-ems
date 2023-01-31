import React, { useState, useEffect, createContext } from "react";

interface UserObjectInterface {
  userId: string;
  role: "hr" | "sales" | "dev" | "admin";
}

interface AppContextInterface {
  authToken: string;
  user: UserObjectInterface;
  updateAuthToken: (token: string) => void;
  updateUser: (user: UserObjectInterface) => void;
}

const AppContext = createContext<AppContextInterface>(
  {} as AppContextInterface
);

interface Props {
  children: React.ReactNode;
}

// AppProvider isspecific to  the app context
const AppProvider: Props = ({ children }) => {
  // Use the useState hook to create a state for the authToken and user
  const [authToken, setAuthToken] = useState("");
  const [user, setUser] = useState<UserObjectInterface | null>(null);
  // Create functions to update the authToken and userObject state
  const updateAuthToken = (token: string) => {
    setAuthToken(token);
    localStorage.setItem("authToken", token);
  };

  const updateUserObject = (user: UserObjectInterface) => {
    setUser(user);
    localStorage.setItem("userObject", JSON.stringify(user));
  };

  return (
    <AppContext.Provider
      value={{ authToken, user, updateAuthToken, updateUserObject }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
