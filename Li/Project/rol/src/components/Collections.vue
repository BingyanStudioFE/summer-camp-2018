<template>
  <div class="collections">
    <div class="head"></div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Collections',
  data () {
    return {
      dataType: null
    }
  },
  methods: {
    getParams () {
      this.dataType = this.$route.params.name
      axios.get('/api/index.json').then((res) => {
        console.log(res.data.name)
      })
    }
  },
  mounted: function () {
    this.getParams()
  }
}
</script>

<style lang="stylus" scoped>
  .collections
    color:red
</style>
