import {
  onMounted, onUnmounted, reactive, ref, toRefs,
} from 'vue';

export default () => {
  const pos = reactive({
    x: 0,
    y: 0,
  });
  const name = ref('YiRu');
  // const x = ref(0);
  // const y = ref(0);

  const handPosition = (e) => {
    // x.value = e.pageX;
    // y.value = e.pageY;
    pos.x = e.pageX;
    pos.y = e.pageY;
  };

  onMounted(() => {
    window.addEventListener('mousemove', handPosition);
  });

  onUnmounted(() => {
    window.removeEventListener('mousemove', handPosition);
  });

  // return { pos };
  return {
    ...toRefs(pos),
    name,
  };
};
