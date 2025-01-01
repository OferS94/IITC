import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import ThemeContextProvider from "./context/ThemeContextProvide";
import Toolbar from "@mui/material/Toolbar"; // Spacer for AppBar
import { useState, useEffect } from "react";

//! Components import
import ResponsiveAppBar from "./components/UI/ResponsiveAppBar";
import AllJokesPage from "./components/AllJokesPage";
import RandomJokePage from "./components/RandomJokePage";
import CreateJokePage from "./components/CreateJokePage";
import SignupPage from "./components/SignupPage";
import SignInPage from "./components/SignInPage";
import ProfilePage from "./components/ProfilePage";
import { use } from "react";
import SettingsPage from "./components/SettingsPage";


function App() {
  const [user, setUser] = useState(null); // User state managed here

  // Check localStorage for user data on app load
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <ThemeContextProvider>
      <CssBaseline />
      <Router>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column", // Stack children vertically
            minHeight: "100vh", // Full height of the viewport
            bgcolor: "background.default", // Theme background color
            color: "text.primary", // Theme text color
          }}
        >
          <ResponsiveAppBar user={user} setUser={setUser} /> {/* Pass user to the AppBar if needed */}
          <Toolbar /> {/* Spacer to prevent overlap */}
          <Box
            sx={{
              flex: 1, // Fills the remaining vertical space
              display: "flex",
              justifyContent: "center", // Centers children horizontally
              alignItems: "center", // Centers children vertically
            }}
          >
            <Routes>
              <Route path="/" element={<AllJokesPage />} />
              <Route path="/random" element={<RandomJokePage />} />
              <Route path="/create" element={<CreateJokePage user={user}/>} />
              <Route path="/signup" element={<SignupPage setUser={setUser} />} />
              <Route path="/profile" element={<ProfilePage user={user} />} />
              <Route path="/signin" element={<SignInPage setUser={setUser} />} />
              <Route path="/settings" element={<SettingsPage user={user} />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ThemeContextProvider>
  );
}

export default App;
