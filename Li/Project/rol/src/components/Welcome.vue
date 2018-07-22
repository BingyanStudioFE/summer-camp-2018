<template>
  <div class="fv">
    <div class="content">
      <span class="welcome a1">{{appName}}</span><br/>
      <span class="welcome a2">{{appAdvantage}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      appName: 'All伊川',
      appAdvantage: '您的线下购物风向标'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="stylus" scoped>
  .fv
    position :fixed
    height :100%
    width :100%
    display :flex
    justify-content :center
    align-items :center
    .content
      .welcome
        font-size :5rem
      .a1
        color :blue
      .a2
        font-size :1.8rem
        color :green
</style>
