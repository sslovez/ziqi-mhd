module.exports = {
  plugins: {
    autoprefixer: {
      //不需要设置这个选项
      // browsers: ['Android >= 4.0', 'iOS >= 8'],
    },
    'postcss-pxtorem': {
      //转换的基准值 1rem = 37.5px
      rootValue: 37.5,
      propList: ['*'],
    },
  },
}