<template>
  <div class="success">
    <h1>Congratulations!</h1>
    <video width="414" height="240" autoplay="autoplay">
      <source src="../assets/videos/success.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <router-link to="/">Back to Home</router-link>
  </div>
</template>

<style lang="scss">
.success {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 22;
}
</style>