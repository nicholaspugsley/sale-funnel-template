/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        // Primary Color: A strong and luxurious blue for main call-to-action buttons and active states
        primary: '#243c5a', // A deep navy blue

        // Primary Hover Color: A slightly lighter blue for hover states on primary elements
        primaryHover: '#2b517a', // A softer navy blue with a hint of brightness

        // Secondary Color: A muted tone for secondary buttons and borders
        secondary: '#eae2d6', // A soft beige, providing a subtle and sophisticated alternative to gray

        // Secondary Hover Color: A slightly darker shade for hover states on secondary elements
        secondaryHover: '#d3cec4', // A deeper beige for a warmer hover effect

        // Background Color: A clean and neutral backdrop for the main background
        background: '#f5f5f5', // A very light gray, almost white, for a clean and modern look

        // Text Color: An elegant and readable color for primary text
        text: '#2b2d42', // A deep charcoal gray that's softer than black

        // Accent Color: A pop of color for icons, highlights, and other accent elements
        accent: '#d8973c', // A muted gold, suggesting luxury and exclusivity
      }
    },
  },
  plugins: [],
}

