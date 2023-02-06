module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        cloud: "url('/public/img/imm.png')",
      },
      colors: {
        girlColor: '#f0b9cf',
        boyColor: '#B3E5FC',
        girlColor2: '#ec4899',
        boyColor2: '#3b82f6',
        primary: '#4FC6DB',
        primaryhover: '#2DB2CB',
        secondary: '#5E6C84',
        secondaryhover: '#43536F',
        delete: '#F04365',
        deletehover: '#EA1D45',
        fonttext: '#344563',
        fonttext2: '#030303',
        fonttext3: '#838486',
        whiteLayout: '#FDFDFF',
        selected: '#F6F7F9',
        bgforlive: '#E5E5E5',
        bgsecondary: '#F3F5F6',
        buttonsbg: '#E9EDF0',
        whitefull: '#FFFFFF',
        sessions: "#2B417C"
      },
      boxShadow: {
        "3xl": "0 4px 3px rgb(0 0 0 / 0.07)",
        "popup": "0 4px 20px #bbbbbb",
        "innerB": "inset 0 -5px 4px -5px rgb(0 0 0 / 0.40);",
        "innerSidebar": "inset 7px 0 30px -3px rgba(0,0,0,0.05)",
        "card": '1px 1px 4px #5a5a5a'
      },
      dropShadow: {
        "rowsTable": "-4px 4px 3px rgb(0 0 0 / 0.07)",
        "rowsTable2": "0 -4px 3px rgb(0 0 0 / 0.07)",
      },
      animation: {
        bounce200: 'bounce 1s infinite 200ms',
        bounce400: 'bounce 1s infinite 400ms',
      },
      transitionProperty: {
        'width': 'width',
        'height': 'height'
      },
      gridTemplateColumns: {
        'fluid': 'repeat(auto-fill, minmax(14.5rem, 1fr))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
