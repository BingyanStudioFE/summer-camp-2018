<template>
  <div class="collections">
    <header-nav :title='dataType'></header-nav>
    <recommend :list='list' :letter='letter'></recommend>
    <sider-nav :letters='letters' @letter='handleLetterChange'></sider-nav>
  </div>
</template>

<script>
import axios from 'axios'
import HeaderNav from './small/Header'
import Recommend from './small/Recommend'
import SiderNav from './small/SiderNav'
export default {
  name: 'Collections',
  components: {
    HeaderNav,
    Recommend,
    SiderNav
  },
  data () {
    return {
      dataType: null,
      list: null,
      letters: null,
      letter: null
    }
  },
  methods: {
    handleLetterChange (letter) {
      this.letter = letter
    },
    getParams () {
      this.dataType = this.$route.params.name
    },
    getDataObj () {
      const api = this.getDataUrl()
      axios.get(api).then((res) => {
        const data = res.data
        this.list = data.list
        this.letters = data.letters
      })
    },
    getDataUrl () {
      const api = '/api/'
      switch (this.dataType) {
        case 'hot':return api + 'hot.json'
        case 'cheap':return api + 'cheap.json'
        case 'newones':return api + 'newones.json'
        case 'others':return api + 'others.json'
        case 'more':return api + 'more.json'
      }
    }
  },
  mounted: function () {
    this.getParams()
    this.getDataObj()
  }
}
</script>

<style lang="stylus" scoped>
  .collections
    color:red
</style>
