import { mount } from '@vue/test-utils';
import ConditionRender from '@/components/ConditionRender.vue';
import { nextTick } from 'vue';

describe('ConditionRender.vue', () => {
  it('renders a profile link', () => {
    const wrapper = mount(ConditionRender)
    const profileLink = wrapper.get('#profile')
    expect(profileLink.exists()).toBe(true)
  })
  it('renders a settings link', () => {
    const wrapper = mount(ConditionRender)
    expect(wrapper.find('#admin').exists()).toBe(false)
  })

  it('renders a settings link', async () => {
    // const wrapper = mount(ConditionRender, {
    //   data() {
    //     return {
    //       admin: true
    //     }
    //   }
    // })
    const wrapper = mount(ConditionRender)
    // 必须通过 defineExpose 暴露才能这样访问
    wrapper.vm.admin = true;
    await nextTick(); // 现在可以正确使用了
    expect(wrapper.find('#admin').exists()).toBe(true);
    // 同样，使用 `get()` 时我们隐式地断言了元素存在。
    expect(wrapper.get('#admin').text()).toEqual('Admin Panel')
  })
  it('toggles dropdown visibility', async () => {
    const wrapper = mount(ConditionRender)
    const dropdown = wrapper.get('#user-dropdown')
    expect(dropdown.isVisible()).toBe(false)
  })
})