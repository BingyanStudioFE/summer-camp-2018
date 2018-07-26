<template>
    <div class="list" ref="content">
        <ul class="wrapper">
            <li class="item" v-for="item of list" :key="item.id" :ref="item.letter">
                <div class="item-img-warpper">
                    <img class="item-img" :src="item.url" alt="">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.itemtitle}}</p>
                    <p class="item-desc">{{item.itemdesc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'HomeRecommend',
  props: {
    list: Array,
    letter: String
  },
  methods: {
    init () {
      this.scroll = new Bscroll(this.$refs.content)
    }
  },
  mounted () {
    this.init()
  },
  watch: {
    letter () {
      console.log(this.letter)
      if (this.letter) {
        if (this.$refs[this.letter]) {
          const ele = this.$refs[this.letter][0]
          this.scroll.scrollToElement(ele)
        }
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.list
    width :100%
    position:fixed
    top:2.4rem
    left:0
    right:0
    bottom:0
    overflow :hidden
    .wrapper
        .item
            border :solid 1px gray
            border-radius: .1rem
            display: flex
            background: white
            overflow: hidden
            .item-img-warpper
                float: left
                height: 4rem
                width: 4rem
                .item-img
                    width: 4rem
                    height: 4rem
                    padding-right: 0.1rem
            .item-info
                flex: 1
                min-width: 0
                padding-left: .1rem
                padding-right: 1rem
                .item-title
                    line-height: 1.5rem
                    font-size: 1.2rem
                    overflow: hidden
                    white-space: nowrap
                    text-overflow: ellipsis
                .item-desc
                    line-height: 1rem
                    color: #ccc
                    overflow: hidden
                    white-space: nowrap
                    text-overflow: ellipsis
        .item:nth-child(1)
            border-top :solid 2px gray
            border-radius: .1rem

</style>
