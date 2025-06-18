// 明确导入 h 函数
import { defineComponent, h } from 'vue'

const Layout = defineComponent({
  name: 'Layout',
  setup(_, { slots }) {
    return () => h('div', { class: 'layout' }, [
      h('header', slots.header?.({ count: 1 })),
      h('main', slots.default?.()),
      h('footer', slots.footer?.())
    ])
  }
})

export default Layout