<template>
  <p class="nav">
    <router-link to="/">ホームページ</router-link> |
    <router-link to="/cart/page/989898">カート</router-link> |
    <router-link to="/my/page/989898">マイページ</router-link> |
    <router-link to="/my/order/989898">注文履歴</router-link> |
    <router-link to="/goods/detail/10195">商品ページ 10195</router-link> |
    <router-link to="/my/like/989898">お気に入り</router-link> |
    <router-link to="/customer/info/989898">情報変更</router-link> |
    <router-link to="/payment/detail/989898">カード</router-link>
  </p>
  <router-view></router-view>
</template>

<script>
export default {};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.nav{
  font-size:1rem;
  margin-top: -30px;
  margin-bottom: 30px;
  margin-right: 600px;
  padding: 1px 12px 1px 12px;
  background-color: #009e96;
  color: #ffffff;
}
</style>