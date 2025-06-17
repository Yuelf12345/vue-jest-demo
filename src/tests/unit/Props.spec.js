import { mount } from "@vue/test-utils";
import Props from "@/components/Props.vue";
import { ElInput } from "element-plus";

describe("Props.vue", () => {
  it("renders an error if length is too short", async () => {
    const wrapper = mount(Props, {
      props: {
        minLength: 10,
        maxLength: 20,
      },
      global: {
        components: {
          ElInput,
        },
      },
    });
    // 设置密码值
    const input = wrapper.findComponent({ name: 'ElInput' });
    await input.setValue('short'); // 测试太短密码
    expect(wrapper.html()).toContain("Password must be at least 10 characters long");

    await input.setValue('thispasswordistoolongforthemaxlength'); // 测试太长密码
    expect(wrapper.html()).toContain("Password must be at most 20 characters long");

    await input.setValue('perfectlength123'); // 测试正确长度密码
    expect(wrapper.html()).not.toContain("Password must be at least");
    expect(wrapper.html()).not.toContain("Password must be at most");
  });

  it('renders a greeting when show is true', async () => {
    const wrapper = mount(Props,{
      global:{
        components: {
          ElInput,
        },
      }
    });

    await wrapper.setProps({ show: true });
    expect(wrapper.html()).toContain("Hello, World!");

    await wrapper.setProps({ show: false });
    expect(wrapper.html()).not.toContain("Hello, World!");
  });
});