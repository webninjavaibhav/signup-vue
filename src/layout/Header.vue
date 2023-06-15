<template>
  <header class="header-component">
    <img src="../assets/png/header-logo.png" class="logo-img" />
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.header-component {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 12px 32px;
  background: #0c3458;
  height: 95px;
  box-shadow: 0px 9px 20px 30px #d3d3d347;
}
.logo-img {
  max-width: 90px;
}

@media (max-width: 620px) {
  .header-component {
    height: 75px;
    padding: 8px 22px;
  }
  .logo-img {
    max-width: 70px;
  }
}
</style>
