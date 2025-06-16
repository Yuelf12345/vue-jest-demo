import { mount } from '@vue/test-utils'
import TodoApp from '@/components/TodoApp.vue'

test('renders a todo', () => {
  const wrapper = mount(TodoApp)
  const todo = wrapper.get('[data-test="todo"]')
  expect(todo.text()).toBe('Learn Vue.js 3')
})

test('adds a new todo', async () => {
  const wrapper = mount(TodoApp)

  await wrapper.get('[data-test="new-todo"]').setValue('New todo')
  await wrapper.get('[data-test="form"]').trigger('submit')
  const todos = wrapper.findAll('[data-test="todo"]')
  expect(todos.length).toBe(2)
  expect(todos[1].text()).toBe('New todo')
})