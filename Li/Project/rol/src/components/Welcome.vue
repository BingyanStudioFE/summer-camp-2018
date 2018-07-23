<template>
  <div class="fv" @click="open = true">
    <transition name="fade">
      <div class="content" v-if="!open">
        <span class="welcome a1">{{appName}}</span><br/>
        <span class="welcome a2">{{appAdvantage}}</span>
      </div>
    </transition>
    <transition name="fade">
      <div class="signin" v-if="open">
        <form action="/server" method="get" target="blank" class="form">
          <table>
            <tr>
              <td>
                <span>Ai名:</span>
              </td>
              <td>
                <input type="text" name="username" max="9" class="text">
              </td>
            </tr>
            <tr>
              <td>
                <span>密码:</span>
              </td>
              <td>
                <input type="password" name="password" max="9" class="text">
              </td>
            </tr>
          </table>
          <input type="submit" value="登陆" class="load" @click='handleClick'>
        </form>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      appName: 'Ai伊川',
      appAdvantage: '您的线下购物风向标',
      open: false
    }
  },
  methods: {
    handleClick () {
      this.$router.push({
        path: '/Home',
        name: 'Home',
        params: {
          username: ''
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .fv
    position :fixed
    height :100%
    width :100%
    display :flex
    justify-content :center
    align-items :center
    .signin
      .form
        display:flex
        flex-direction :column
        table
          border-spacing: .5rem
          td
            text-align :justify
        .load
          flex:1
          border :solid .7px black
          padding:0
          margin :5px auto
          width:5rem
          height :1.8rem
          line-height :1.8rem
          background:#fff
        .text
          padding:0 .5rem
          width :9rem
          heigh :1.4rem
          line-height 1.4rem
          border :solid 1px blue
          border-radius:.2rem
    .content
      display:flex
      flex-direction :column
      margin-top :-2rem
      position :absolute
      .welcome
        margin-top :-20px
        font-size :2.2rem
      .a1
        color :blue
      .a2
        font-size :.8rem
        color :green
  .fade-enter-active, .fade-leave-active
    transition: opacity 2s
  .fade-enter, .fade-leave-to
    opacity: 0
</style>
