import { mount } from "@vue/test-utils";
import Layout from "@/components/Layout";
import { describe, it, expect } from "@jest/globals";
import { h } from "vue";

describe("Layout", () => {
  it("renders properly", () => {
    const wrapper = mount(Layout, {
      slots: {
        // default:'Layout',
        default: h("div", "Layout"),
      },
    });
    expect(wrapper.html()).toContain("Layout");
  });

  it("scoped slots", () => {
    const wrapper = mount(Layout, {
      slots: {
        header: ({ count }: { count: number }) => h("div", `Count: ${count}`),
      },
    });
    // 验证插槽内容
    const headerDiv = wrapper.find("header div");
    expect(headerDiv.exists()).toBe(true);
    expect(headerDiv.text()).toBe("Count: 1");
    // 或者验证包含特定文本
    expect(wrapper.html()).toContain("Count: 1");
  });
});
