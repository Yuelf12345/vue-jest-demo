import { defineComponent, ref } from "vue";

const PostList = defineComponent({
  setup() {
    const posts = ref<{ id: number; title: string }[]>([]);
    async function getPosts() {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      posts.value = await response.json();
    }
    return () => (
      <div>
        <button onClick={getPosts}>Get posts</button>
        <ul>
          {posts.value.map((post) => (
            <li key={post.id} data-test="post">{post.title}</li>
          ))}
        </ul>
      </div>
    )
  }
})

export default PostList