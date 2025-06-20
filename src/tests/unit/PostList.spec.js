import { mount } from "@vue/test-utils";
import PostList from "@/components/PostList";

// 模拟fetch API
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([
      { id: 1, title: 'Test Post 1' },
      { id: 2, title: 'Test Post 2' }
    ]),
  })
);

describe("Request", () => {
  it("loads posts on button click", async () => {
    const wrapper = mount(PostList);
    await wrapper.get('button').trigger('click')
    await wrapper.vm.$nextTick();

    // 验证fetch调用
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/posts"
    );

    // 验证DOM渲染
    const posts = wrapper.findAll('[data-test="post"]');
    expect(posts).toHaveLength(2);
    expect(posts[0].text()).toBe('Test Post 1');
    expect(posts[1].text()).toBe('Test Post 2');
  });
});