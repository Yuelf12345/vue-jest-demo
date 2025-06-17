import { mount } from '@vue/test-utils';
import Form from '@/components/Form.vue';

describe('Form.vue', () => {
  it('emits submit event with form data', async () => {
    const wrapper = mount(Form);
    await wrapper.find('input[type=email]').setValue('name@mail.com');
    await wrapper.find('input[type=password]').setValue('password123');
    await wrapper.find('form').trigger('submit.prevent');
    expect(wrapper.emitted('submit')).toBeTruthy();
    expect(wrapper.emitted('submit')[0]).toEqual([{
      email: 'name@mail.com',
      password: 'password123',
    }]);
  });
});