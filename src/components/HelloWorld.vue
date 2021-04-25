<template>
  <p>{{ props.msg }}</p>
  <button @click.prevent="handEmitClick">按鈕</button>
  <h1 ref="dom"></h1>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: 'this is default value',
    },
  },
  // emits: ['callHandEmit'],
  // 預處理 (檢查 emit payload)
  emits: {
    callHandEmit(payload) {
      return payload === 1236;
    },
  },
  setup(props, context) {
    const text = ref('Test');
    const dom = ref(null);

    const handEmitClick = () => {
      console.log(props);
      context.emit('callHandEmit', 123);
    };
    onMounted(() => {
      console.log(dom);
    });
    return {
      handEmitClick,
      props,
      text,
      dom,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
