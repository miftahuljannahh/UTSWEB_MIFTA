<script>
export default {
  name: "FooterItem",
};
</script>

<template>
  <footer class="text-black">
    <div class="d-flex justify-content-center">
      <p>&clubsuit; Al-qur'an</p>
      <p> &clubsuit;</p>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background: linear-gradient(45deg, #99b8ee, #ffedf8);
  animation: hue-rotate 1s linear infinite alternate;
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>