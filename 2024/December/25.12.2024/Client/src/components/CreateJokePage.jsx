import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types"; // Import PropTypes
import { useTheme } from "@mui/material/styles"; // Import useTheme

function CreateJokePage({ user }) {
  const [formData, setFormData] = useState({
    setup: "",
    punchline: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme(); // Access the current theme

  // Redirect to Sign In if user is not logged in
  useEffect(() => {
    if (!user) {
      navigate("/signin");
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError(""); // Clear previous errors
      setSuccess(false); // Reset success state

      // Post the joke to the backend
      await axios.post("http://localhost:3000/api/v1/jokes", {
        ...formData,
        author: user._id, // Associate joke with the logged-in user
      });

      setSuccess(true);
      setFormData({ setup: "", punchline: "" }); // Clear the form
    } catch (err) {
      console.error(err);
      setError("Failed to create joke. Please try again.");
    }
  };

  return (
    <div
      className="flex items-center justify-center h-screen p-4"
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
          Create a Joke
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
        {success && (
          <div
            style={{
              color: theme.palette.success.main,
              marginBottom: "1rem",
            }}
          >
            Joke created successfully!
          </div>
        )}

        <div className="mb-4">
          <label
            className="block font-medium"
            style={{
              color: theme.palette.text.secondary,
            }}
          >
            Setup
          </label>
          <input
            type="text"
            name="setup"
            value={formData.setup}
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
            Punchline
          </label>
          <input
            type="text"
            name="punchline"
            value={formData.punchline}
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
          Post Joke
        </button>
      </form>
    </div>
  );
}

// Add PropTypes validation
CreateJokePage.propTypes = {
  user: PropTypes.shape({
    _id: PropTypes.string.isRequired, // Validate that _id is a required string
    fName: PropTypes.string,
    lName: PropTypes.string,
    phone_number: PropTypes.string,
  }),
};

export default CreateJokePage;
