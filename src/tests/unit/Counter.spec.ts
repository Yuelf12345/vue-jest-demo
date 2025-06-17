import { mount } from '@vue/test-utils';
import Counter from '@/components/Counter.tsx';

describe('Counter.vue', () => {
  it('emits an event when clicked', () => {
    const wrapper = mount(Counter)

    wrapper.find('button').trigger('click')
    wrapper.find('button').trigger('click')

    const events = wrapper.emitted()
    console.log('events', events);
    expect(events).toHaveProperty('increment')
  })
  it('emits an event with count when clicked', () => {
    const wrapper = mount(Counter)

    wrapper.find('button').trigger('click')
    wrapper.find('button').trigger('click')
    // `emitted()` 接受一个参数。它返回一个包含所有 `this.$emit('increment')` 发生情况的数组。
    const incrementEvent = wrapper.emitted('increment')
    console.log('incrementEvent', incrementEvent);
    // 我们“点击”了两次，所以 `increment` 的数组应该有两个值。
    expect(incrementEvent).toHaveLength(2)
    // 断言第一次点击的结果。
    // 注意，值是一个数组。
    expect(incrementEvent[0]).toEqual([{
      count: 1,
      isEven: false
    }])
    // 然后是第二次的结果。
    expect(incrementEvent[1]).toEqual([{
      count: 2,
      isEven: true
    }])
  })
})