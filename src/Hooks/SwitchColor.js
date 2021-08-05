import { useState, useEffect, createContext } from "react";

// export const ThemeContext = createContext(localStorage.getItem("theme") === "dark")

export function SwitchColor() {
  const [lightMode, setLightMode] = useState(
    localStorage.getItem("theme") === "light" ? true : false
  );

  useEffect(() => {
    if (lightMode) {
      document.body.classList.add("lightMode");
    } else {
      document.body.classList.remove("lightMode");
      localStorage.setItem("theme", "");
    }
  }, [lightMode]);

  return [lightMode, setLightMode];
}
