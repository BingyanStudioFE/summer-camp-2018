<template>
  <div class="home">
    <div class="hot">
      {{hot}}
    </div>
    <div class="cheap">
      {{cheap}}
    </div>
    <div class="newones">
      {{newones}}
    </div>
    <div class="others">
      {{others}}
    </div>
    <div class="more">
      {{more}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      hot: '热销榜',
      cheap: '最实惠',
      newones: '新品类',
      others: '有好货',
      more: '更多分类'
    }
  }
}
</script>

<style lang="stylus" scoped>
  .home
    position: absolute
    width: 100%
    height: 8rem
    display: grid
    grid-gap:0
    grid-template-columns: 1fr 1fr 1fr 1fr
    grid-template-rows: 90px 90px 90px 90px
    grid-template-areas:"h h h o""n m m o""n m m o""n c c c"
    div
      display: flex
      align-items :center
      justify-content :center
    .hot
      grid-area: h
      background: rgba(200,0,0,.7)
    .cheap
      grid-area: c
      background: rgba(0,200,0,.7)
    .newones
      grid-area: n
      background: rgba(200,200,0,.7)
    .others
      grid-area: o
      background: rgba(200,0,200,.7)
    .more
      grid-area: m
      background: rgba(0,200,200,0.3)
</style>
