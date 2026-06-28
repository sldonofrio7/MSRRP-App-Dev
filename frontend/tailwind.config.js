/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./src/app/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        "light-blue": "#80A9BD",
        "dark-blue": "#245F7A",
        "navy-blue": "#002D41",
        "red-orange": "#F15A22",
      },
      fontFamily: {
        "primary": ["Raleway_400Regular"],
        "primary-light": ["Raleway_300Light"],
        "primary-italic": ["Raleway_400Regular_Italic"],
        "primary-bold": ["Raleway_700Bold"],
        "secondary": ["Sanchez_400Regular"],
        "secondary-italic": ["Sanchez_400Regular_Italic"],
        "accent": ["Matchbook_400Regular"]
      },
    },
  },
  plugins: [],
}