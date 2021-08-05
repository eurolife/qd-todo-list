module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  mode: 'jit',
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      // common
      white: '#FFF',
      black: '#000',
      gray: '#999',
      // primary
      brightblue: 'hsl(220, 98%, 61%)',
      bgfrom: 'hsl(192, 100%, 67%)',
      bgto: 'hsl(280, 87%, 65%)',
      // light
      vlgray: 'hsl(0, 0%, 98%)',
      vlgrayblue: 'hsl(236, 33%, 92%)',
      lgrayblue: 'hsl(233, 11%, 84%)',
      dgrayblue: 'hsl(236, 9%, 61%)',
      vdgrayblue: 'hsl(235, 19%, 35%)',
      // dark
      vdblue: 'hsl(235, 21%, 11%)',
      vddesblue: 'hsl(235, 24%, 19%)',
      lgrayblue: 'hsl(234, 39%, 85%)',
      lgraybluehover: 'hsl(236, 33%, 92%)',
      dgrayblue: 'hsl(234, 11%, 52%)',
      vdgrayblue: 'hsl(233, 14%, 35%)',
      vdgrayblue2: 'hsl(237, 14%, 26%)',
    },
    extend: {
      fontFamily: {
        'josefine': ['"Josefin Sans"']
      },
      letterSpacing: {
        widest: '.3em'
      }
    },
  },
  variants: {
    extend: {
      display: ['dark']
    },
  },
  plugins: [],
}
