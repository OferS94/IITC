import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/Pages/SignIn";
import SignUp from "./components/Pages/SignUp";
import Profile from "./components/Pages/Profile";
import HomePage from "./components/Pages/HomePage";
import { getLoggedInUser } from "./data/auth";

const App: React.FC = () => {
  const [user, setUser] = useState<{ id: number; name: string; email: string } | null>(null);

  // Check for logged-in user on app load
  useEffect(() => {
    const loggedInUser = getLoggedInUser();
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage user={user} setUser={setUser} />} />
        <Route path="/signin" element={<SignIn setUser={setUser} />} />
        <Route path="/signup" element={<SignUp setUser={setUser} />} />
        <Route path="/profile" element={<Profile user={user} />} />
      </Routes>
    </Router>
  );
};

export default App;
