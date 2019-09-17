
module.exports = {
  plugins: [
    ['import', {
      libraryName: 'hips',
      libraryDirectory: 'es',
      style: true
    }, 'hips']
  ],
  presets: [
    '@vue/app'
  ]
}
