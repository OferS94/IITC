import { useState , FormEvent } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useTheme } from "@mui/material/styles";

function SignInPage({setUser}) {
  const [formData , setFormData] = useState({
    phone_number: "",
    password: "",
  })
  const navigate = useNavigate()
  const theme = useTheme()
  const [error, setError] = useState("");


  const handleChange = (e) => {
    const  {name , value} = e.target;
    setFormData({...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError(""); // Clear previous errors
      const response = await axios.post("http://localhost:3000/api/v1/users/login", formData);

      // Save user data to localStorage
      localStorage.setItem("user", JSON.stringify(response.data.user));

      // Update global user state
      setUser(response.data.user);

      // Redirect to home or profile page
      navigate("/");
    } catch (err) {
      console.error(err);
      setError("Invalid phone number or password. Please try again.");
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
          Sign In
        </h2>

        {error && (
          <div
            style={{
              color: theme.palette.error.main,
              marginBottom: "1rem",
            }}
          >
            {error}
          </div>
        )}

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
          Sign In
        </button>
      </form>
    </div>
  );
}

export default SignInPage