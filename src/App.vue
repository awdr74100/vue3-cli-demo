<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Bang" @callHandEmit="handEmitClick" />
  {{ x }}
  {{ y }}
</template>

<script>
import useMouse from '@/composition-api/useMouse';
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  setup() {
    const { x, y } = useMouse();

    const handEmitClick = (val) => {
      console.log(val);
    };
    return { handEmitClick, x, y };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
