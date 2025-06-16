import { mount } from '@vue/test-utils'
import YButton from '@/components/YButton.vue'

describe('YButton.vue', () => {
   // 基础渲染测试
    it('renders default button with correct classes and text', () => {
      const wrapper = mount(YButton)
      const button = wrapper.find('button')
      expect(button.exists()).toBe(true)
      expect(button.classes()).toContain('y-button')
      expect(button.classes()).toContain('y-button--default')
      expect(button.text()).toBe('按钮')
    })
    // Props 类型验证
    it('validates prop types correctly', () => {
       const validator = YButton.props.type.validator
        expect(validator('default')).toBe(true)
        expect(validator('primary')).toBe(true)
        expect(validator('info')).toBe(true)
        expect(validator('success')).toBe(true)
        expect(validator('warning')).toBe(true)
        expect(validator('danger')).toBe(true)
        expect(validator('other')).toBe(false)
    })
    // 不同类型按钮的样式类测试
    const types = ['primary', 'info', 'success', 'warning', 'danger']
    types.forEach(type => {
      it(`renders ${type} button with correct classes`, () => {
        const wrapper = mount(YButton, {
          props: { type }
        })
        const button = wrapper.find('button')
        expect(button.classes()).toContain('y-button')
        expect(button.classes()).toContain(`y-button--${type}`)
      })
    })
     // 插槽内容测试
    it('renders slot content correctly', () => {
      const slotContent = 'Custom Button Text'
      const wrapper = mount(YButton, {
        slots: {
          default: slotContent
        }
      })
      const button = wrapper.find('button')
      expect(button.text()).toBe(slotContent)
    })
    // 交互测试
    it('emits click event when button is clicked', async () => {
      const wrapper = mount(YButton)
      const button = wrapper.find('button')
      await button.trigger('click')
      expect(wrapper.emitted()).toHaveProperty('click')
      expect(wrapper.emitted('click').length).toBe(1)
    })
})