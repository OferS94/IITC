import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles"; // Import useTheme

function SignupPage({ setUser }) {
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    phone_number: "",
    password: "",
  });

  const navigate = useNavigate();
  const theme = useTheme(); // Access the current theme

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const signupResponse = await axios.post("http://localhost:3000/api/v1/users", formData);

      const loginResponse = await axios.post("http://localhost:3000/api/v1/users/login", {
        phone_number: formData.phone_number,
        password: formData.password,
      });

      // Save the user to localStorage
      localStorage.setItem("user", JSON.stringify(loginResponse.data.user));

      setUser(loginResponse.data.user); // Update the parent state
      navigate("/");
    } catch (error) {
      console.error("Error signing up:", error);
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <div
      className="flex items-center justify-center h-screen"
      style={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      <form
        className="p-6 shadow-md rounded-md w-96"
        style={{
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
        }}
        onSubmit={handleSubmit}
      >
        <h2
          className="text-xl font-bold mb-4"
          style={{
            color: theme.palette.text.primary,
          }}
        >
          Sign Up
        </h2>
        <div className="mb-4">
          <label
            className="block font-medium"
            style={{
              color: theme.palette.text.secondary,
            }}
          >
            First Name
          </label>
          <input
            type="text"
            name="fName"
            value={formData.fName}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            style={{
              backgroundColor: theme.palette.background.default,
              color: theme.palette.text.primary,
              borderColor: theme.palette.divider,
            }}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block font-medium"
            style={{
              color: theme.palette.text.secondary,
            }}
          >
            Last Name
          </label>
          <input
            type="text"
            name="lName"
            value={formData.lName}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            style={{
              backgroundColor: theme.palette.background.default,
              color: theme.palette.text.primary,
              borderColor: theme.palette.divider,
            }}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block font-medium"
            style={{
              color: theme.palette.text.secondary,
            }}
          >
            Phone Number
          </label>
          <input
            type="text"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            style={{
              backgroundColor: theme.palette.background.default,
              color: theme.palette.text.primary,
              borderColor: theme.palette.divider,
            }}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block font-medium"
            style={{
              color: theme.palette.text.secondary,
            }}
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            style={{
              backgroundColor: theme.palette.background.default,
              color: theme.palette.text.primary,
              borderColor: theme.palette.divider,
            }}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 rounded-md font-bold"
          style={{
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
          }}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignupPage;
