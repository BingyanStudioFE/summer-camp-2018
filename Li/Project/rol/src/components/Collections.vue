<template>
  <div class="collections">
    {{w}}
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Collections',
  data () {
    return {
      dataType: null,
      w: null
    }
  },
  methods: {
    getParams () {
      this.dataType = this.$route.params.name
    },
    getInfo () {
      axios.get('static/mock/index.json').then((res) => {
        this.w = res.data.name
      })
    }
  },
  mounted: function () {
    this.getInfo()
  }
}
</script>

<style lang="stylus" scoped>
  .collections
    color:red
</style>
