module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#409EFF",       // Ali blue
        success: "#67C23A",
        warning: "#E6A23C",
        danger: "#F56C6C",
        info: "#909399",
        background: "#F9F6F3",    // Soft background
        foreground: "#1B1624",    // Text
        accent: "#5DCDF1",        // Highlight
      },
      fontFamily: {
        base: ["Elza", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
        heading: ["Recoleta", "serif"]
      },
      boxShadow: {
        natural: "6px 6px 9px rgba(0, 0, 0, 0.2)",
        deep: "12px 12px 50px rgba(0, 0, 0, 0.4)",
        soft: "0px 12px 32px 4px rgba(0, 0, 0, .04), 0px 8px 20px rgba(0, 0, 0, .08)",
      },
      backgroundImage: {
        'wave': "url('https://aliabdaal.com/wp-content/uploads/2024/09/wave.png')"
      },
      borderRadius: {
        'el': '20px',
      }
    },
  },
  plugins: [],
}
