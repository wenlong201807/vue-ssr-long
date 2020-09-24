<template>
<!-- 客户端激活 -->
  <div id="app">
    App.vue
    <Bar></Bar>
    <Foo></Foo>
  </div>
</template>

<script>
import Bar from './components/Bar'
import Foo from './components/Foo'
export default {
  components: { Bar, Foo },
}
</script>