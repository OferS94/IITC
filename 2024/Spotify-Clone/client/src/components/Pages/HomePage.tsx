import React from "react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { getLoggedInUser, logoutUser } from "../../data/auth";

interface HomePageProps {
  user: { id: number; name: string; email: string } | null;
  setUser: React.Dispatch<React.SetStateAction<{ id: number; name: string; email: string } | null>>;
}

const HomePage: React.FC<HomePageProps> = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    setUser(null);
    navigate("/signin");
  };

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-4">
        <h1 className="text-2xl font-bold mb-4">Welcome to Spotify Clone</h1>
        <Button onClick={() => navigate("/signin")}>Sign In</Button>
        <Button onClick={() => navigate("/signup")}>Sign Up</Button>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome back, {user.name}!</h1>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};

export default HomePage;
