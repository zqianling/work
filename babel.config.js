/*
 * @Descripttion: 
 * @version: 0.11
 * @Author: 前领
 * @Date: 2019-08-27 17:05:01
 * @copyright: Copyright (c) 2019,Hand
 */
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
