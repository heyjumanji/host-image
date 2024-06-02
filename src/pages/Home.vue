<template>
  <div id="box">
    <div class="custom-background"></div>
    <div class="header">
      <a href="https://github.com/heyjumanji" target="_blank"></a>
    </div>
    <div class="main">
      <Upload @imageUploaded="handleImageUploaded"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import Wallpapers from "../components/Wallpapers.vue"
import Upload from "../components/Upload.vue"
import { reactive } from "vue";

// Function to handle image uploaded event
const handleImageUploaded = (imageUrl: string) => {
  // Handle image upload here
}
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
}

.custom-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('https://host-image.pages.dev/file/7029545f9e32738b1b361.jpg'); /* Replace '/path/to/your/image.jpg' with the URL of your image */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.main {
  flex: 1;
  flex-direction: column;
  padding: 30px 0;
  align-items: center;
  box-sizing: border-box;
}

.header {
  display: flex;
  justify-content: end;
}

.header a {
  width: 22px;
  height: 22px;
  background-image: url("/github.svg");
  background-color: transparent;
  background-size: 110%;
  background-repeat: no-repeat;
  background-position: top;
}
</style>
