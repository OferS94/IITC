import React from "react";
import { useNavigate } from "react-router-dom";
import { users } from "../../data/users";
import { loginUser } from "../../data/auth";

interface SignInProps {
  setUser: React.Dispatch<React.SetStateAction<{ id: number; name: string; email: string } | null>>;
}

const SignIn: React.FC<SignInProps> = ({ setUser }) => {
  const navigate = useNavigate();

  const handleLogin = (user: { id: number; name: string; email: string }) => {
    loginUser(user);
    setUser(user);
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-4">
      <h1 className="text-2xl font-bold mb-4">Sign In</h1>
      {users.map((user) => (
        <button
          key={user.id}
          onClick={() => handleLogin(user)}
          className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 mb-2"
        >
          Sign in as {user.name}
        </button>
      ))}
    </div>
  );
};

export default SignIn;
