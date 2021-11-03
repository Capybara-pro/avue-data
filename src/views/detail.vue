<template>
 <avue-data :props="props" :option="option"></avue-data>
</template>

<script>
import { option } from '@/option/main.js'
export default {
  name: 'main',
  props: {
    msg: String
  },
  data () {
    return {
      props: {
        id: null,
        name: 'view'
      },
      option
    }
  },
  components: {
    avueData
  }
}
</script>

<style scoped>

</style>
