import { defineComponent, ref } from 'vue'

type IncrementPayload = {
  count: number;
  isEven: boolean;
};

const Counter = defineComponent({
  emits: {
    increment: (payload: IncrementPayload) => {
      return typeof payload.count === 'number' &&
        typeof payload.isEven === 'boolean';
    }
  },
  setup(_, { emit }) {
    const count = ref(0)
    const handleClick = () => {
      count.value += 1
      emit("increment", {
        count: count.value,
        isEven: count.value % 2 === 0
      })
    }
    return () => (
      <div>
        <button onClick={handleClick}>Increment</button>
      </div>
    )
  }
})

export default Counter