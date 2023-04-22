import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'home_bg_image': "url(/public/home_bg.png)"
      }
    },
  },
  plugins: [],
} satisfies Config;
