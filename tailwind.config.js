module.exports = {
  content: ["*"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1200px',
    },
    extend: {
      backgroundImage: {
        'hero-bg': "linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)),url(img/g4.jpeg);",
      }
    },
  },
  plugins: [
    require("daisyui")
  ],
}
