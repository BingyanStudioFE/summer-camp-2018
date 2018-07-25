<template>
  <div class="header">
    {{title}}
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: String
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="stylus">
.header
  box-sizing: border-box
  position: fixed
  top:0
  width: 100%
  height: 2.4rem
  background: rgba(0,255,255,.7)
  line-height :2.2rem
  font-size: 1rem
  border: solid 1px gray
  border-bottom: 2px
  padding: .1rem
  letter-spacing :.3rem
  text-align :center
</style>
