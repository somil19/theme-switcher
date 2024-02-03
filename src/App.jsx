import React from "react";
import { ThemeProvider } from "./context/Theme";
import ThemeBtn from "./components/Themebtn";
import Card from "./components/Card";
import { useState } from "react";
import { useEffect } from "react";

export default function App() {
  // return <div>RADHE RADHE !</div>;
  const [themeMode, setThemeMode] = useState("light");
  const darkTheme = () => {
    setThemeMode("dark");
  };
  const lightTheme = () => {
    setThemeMode("light");
  };
  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
    // if (themeMode === "dark") {
    //   document.body.classList.add("dark");
    // } else {
    //   document.body.classList.remove("light");
    // }
  }, [themeMode]);
  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
