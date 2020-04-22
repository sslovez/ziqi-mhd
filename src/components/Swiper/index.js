// 引入  Swiper.vue 和 SwiperItem.vue
import Swiper from './Swiper.vue'
import SwiperItem from './SwiperItem.vue'

// 将他们暴露出去
/* export default {
  Swiper,
  SwiperItem
} */
// ESM 的规范在引入时只是看上去像解构赋值
// 其实不是，需要个命名暴露
export {
  Swiper,
  SwiperItem
}
