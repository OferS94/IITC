// import { createContext, useState, useMemo, useContext } from "react";
// import { createTheme, ThemeProvider } from "@mui/material/styles";

// const ThemeContext = createContext();

// export const useThemeContext = () => useContext(ThemeContext);

// const ThemeContextProvider = ({ children }) => {
//   const [mode, setMode] = useState("light");

//   const toggleTheme = () => {
//     setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
//   };

//   const theme = useMemo(
//     () =>
//       createTheme({
//         palette: {
//           mode,
//           primary: {
//             main: mode === "light" ? "#1976d2" : "#90caf9",
//           },
//         },
//       }),
//     [mode]
//   );

//   return (
//     <ThemeContext.Provider value={{ mode, toggleTheme }}>
//       <ThemeProvider theme={theme}>{children}</ThemeProvider>
//     </ThemeContext.Provider>
//   );
// };

// export default ThemeContextProvider;
import { createContext, useState, useMemo, useContext } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

const ThemeContextProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: mode === "light" ? "#1976d2" : "#90caf9",
          },
          background: {
            default: mode === "light" ? "#f5f5f5" : "#121212", // Default background color
          },
        },
      }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;

