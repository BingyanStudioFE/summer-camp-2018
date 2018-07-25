<template>
  <div>
    <ul class="list">
      <li v-for="(item,index) of letters"
        :key="index"
        :ref="item"
        @click="handleLetterClick"
        @touchstart='handleTouchStart'
        @touchmove='handleTouchMove'
        @touchend='handleTouchEnd'
        >{{item}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SiderNav',
  data () {
    return {
      touch: false,
      startY: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  props: {
    letters: Array
  },
  methods: {
    handleLetterClick (e) {
      const letter = e.target.innerText
      this.$emit('letter', letter)
    },
    handleTouchStart () {
      this.touch = true
    },
    handleTouchMove (e) { // 有无函数节流的必要？
      if (this.touch) {
        const touchY = e.touches[0].clientY - 72
        const index = Math.floor((touchY - this.startY) / 21)
        if (index >= 0 && index < this.letters.length) {
          this.$emit('letter', this.letters[index])
        }
      }
    },
    handleTouchEnd () {
      this.touch = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.list
  display:flex
  flex-direction :column
  justify-content :center
  align-items :center
  list-style-type :none
  position :absolute
  right :.2rem
  bottom:0
  top: 2.7rem
  li
    font-size :.6rem
    line-height :.7rem

</style>
