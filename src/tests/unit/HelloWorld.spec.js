import { mount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
   it('renders the component with default props', () => {
    const wrapper = mount(HelloWorld);
    
    // 验证主要元素渲染
    expect(wrapper.find('h1').text()).toBe('This is a simple Vue.js component.');
    expect(wrapper.find('h4').text()).toBe('Hello, World!');
    expect(wrapper.find('button').text()).toContain('Count: 0');
  });

  it('increments count when button is clicked', async () => {
    const wrapper = mount(HelloWorld);
    
    // 模拟按钮点击
    await wrapper.find('button').trigger('click');
    
    // 验证计数器增加
    expect(wrapper.find('button').text()).toContain('Count: 1');

    await wrapper.find('button').trigger('click');
    expect(wrapper.find('button').text()).toContain('Count: 2');
  });
})