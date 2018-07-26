<template>
  <div class="nav">
    <div class="hot" @click="handleclick('hot')">
      {{hot}}
    </div>
    <div class="cheap" @click="handleclick('cheap')">
      {{cheap}}
    </div>
    <div class="newones" @click="handleclick('newones')">
      {{newones}}
    </div>
    <div class="others" @click="handleclick('others')">
      {{others}}
    </div>
    <div class="more" @click="handleclick('more')">
      {{more}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data () {
    return {
      hot: '热销榜',
      cheap: '最实惠',
      newones: '新品类',
      others: '有好货',
      more: '总览'
    }
  },
  methods: {
    handleclick (kind) {
      this.$router.push({
        path: '/Home/Collections',
        name: 'Collections',
        params: {
          name: kind
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  @keyframes moveup{
    from{transform :translateY(100%)}
    to{transform: translateY(0)}
  }
  @keyframes movedown{
    from{transform :translateY(-100%)}
    to{transform: translateY(0)}
  }
  @keyframes moveleft{
    from{transform :translateX(100%)}
    to{transform: translateX(0)}
  }
  @keyframes moveright{
    from{transform :translateX(-100%)}
    to{transform: translateX(0)}
  }
  @keyframes moveout{
    from{opacity :0}
    to{opacity :1}
  }
  .nav
    position: absolute
    width: 100%
    height: 100%
    display: grid
    grid-gap:0
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr
    grid-template-areas:"h h . . c c""h h . . c c"". . m m . ."". . m m . .""n n . . o o""n n . . o o"
    div
      display: flex
      align-items :center
      justify-content :center
    .hot
      grid-area: h
      background: rgba(200,0,0,.7)
      animation-name: moveup
      animation-duration :2s
      animation-timing-function :ease-out
    .cheap
      grid-area: c
      background: rgba(0,200,0,.7)
      animation-name: moveright
      animation-duration :2s
      animation-timing-function :ease-out
    .newones
      grid-area: n
      background: rgba(200,200,0,.7)
      animation-name: moveleft
      animation-duration :2s
      animation-timing-function :ease-out
    .others
      grid-area: o
      background: rgba(200,0,200,.7)
      animation-name: movedown
      animation-duration :2s
      animation-timing-function :ease-out
    .more
      grid-area: m
      background: rgba(0,200,200,0.3)
      animation-name: moveout
      animation-duration :2s
      animation-timing-function :ease-out
</style>
