"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { loadPassedIds, savePassedIds, PASSED_IDS_STORAGE_KEY } from "./quiz";

type UserContextType = {
  email: string | null;
  login: (email: string, passedIds: number[]) => void;
  logout: () => void;
  isLoading: boolean;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [email, setEmail] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedEmail = localStorage.getItem("user-email");
    if (storedEmail) {
      setEmail(storedEmail);
    }
    setIsLoading(false);
  }, []);

  const login = (userEmail: string, passedIds: number[]) => {
    setEmail(userEmail);
    localStorage.setItem("user-email", userEmail);
    savePassedIds(passedIds);

    // Send final progress back to server to make sure DB has it
    fetch("/api/auth/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: userEmail, passedIds }),
    }).catch((err) => console.error("Sync failed on login:", err));
  };

  const logout = () => {
    setEmail(null);
    localStorage.removeItem("user-email");
    localStorage.removeItem(PASSED_IDS_STORAGE_KEY);
  };

  return (
    <UserContext.Provider value={{ email, login, logout, isLoading }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
