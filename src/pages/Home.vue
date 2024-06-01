<template>
  <div id="box">
    <wallpapers/>
    <div class="header">
      <a href="https://github.com/heyjumanji/host-image" target="_blank" class="icon github"></a>
      <!-- Removed Twitter icon -->
      <!-- <a href="https://twitter.com/example" target="_blank" class="icon twitter"></a> -->
      <a href="https://x.com" target="_blank" class="icon xcom"></a>
    </div>
    <div class="main">
      <Upload/>
    </div>
    <div class="footer">
      based on <a href="https://telegra.ph" target="_blank">Telegraph</a> Image upload tool, UI comes from <a href="https://github.com/cf-pages/Telegraph-Image" target="_blank">Telegraph-Image</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import Wallpapers from "../components/Wallpapers.vue"
import Upload from "../components/Upload.vue"
</script>

<style scoped lang="less">
#box {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  position: relative;
  box-sizing: border-box;
  padding: 30px;
  background: linear-gradient(240deg, rgba(150, 50, 50, .3), rgba(0, 0, 200, 0));
}
.header {
  display: flex;
  justify-content: end;
}
.icon {
  width: 22px;
  height: 22px;
  background-color: transparent;
  background-size: 110%;
  background-repeat: no-repeat;
  background-position: top;
}
.github {
  background-image: url("/github.svg");
}
/* Removed Twitter icon */
.xcom {
  background-image: url("/xcom.svg");
}
.main {
  flex: 1;
  flex-direction: column;
  padding: 30px 0;
  align-items: center;
  box-sizing: border-box;
}
.footer {
  font-size: 12px;
  color: #fff;
}
.footer a {
  color: #fff;
  text-decoration: none;
  font-weight: 700;
}
</style>
