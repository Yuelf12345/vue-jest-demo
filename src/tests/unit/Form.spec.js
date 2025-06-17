import { mount } from '@vue/test-utils';
import Form from '@/components/Form.vue';

describe('Form.vue', () => {
  it('emits submit event with form data', async () => {
    const wrapper = mount(Form);
    await wrapper.find('input[type=email]').setValue('name@mail.com');
    await wrapper.find('input[type=password]').setValue('password123');
    await wrapper.find('form').trigger('submit.prevent');
    expect(wrapper.emitted('submit')).toBeTruthy(); //验证值是否为 "truthy"（真值）
    // expect(wrapper.emitted('submit')).toHaveLength(1); //验证事件是否被触发一次
    // expect(wrapper.emitted()).toHaveProperty('submit'); // 明确检查事件名
    expect(wrapper.emitted('submit')[0]).toEqual([{
      email: 'name@mail.com',
      password: 'password123',
    }]);
  });

  it('should emit reset event', async () => {
    const wrapper = mount(Form);
    const componentToGetFocus = wrapper.find('button')
    await wrapper.find('input[type=email]').trigger('blur', {
      relatedTarget: componentToGetFocus.element
    });
    expect(wrapper.emitted('focus-lost')).toBeTruthy();
  });

});