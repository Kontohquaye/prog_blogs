"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();
  const handleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    return () => {
      setMounted(false);
    };
  }, []);
  if (!mounted) return null;
  return (
    <button
      className=" w-full sm:w-min sm:hover:bg-transparent sm:hover:text-secondary hover:bg-secondary  px-2 py-2 sm:py-0 sm:px-0"
      onClick={handleTheme}
    >
      {theme === "light" ? (
        <MdDarkMode className="font-black text-2xl " />
      ) : (
        <CiLight className="font-black text-2xl" />
      )}
    </button>
  );
};

export default ThemeButton;
