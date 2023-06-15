<template>
  <div class="congratulations-bg step-container step-process step-process-3">
    <v-card class="mx-auto signup-card">
      <div class="signup-content">
        <img src="../../assets/png/LiwaLogo.png" class="logo-img" />
        <h3 class="signup-heading success-heading">Congratulations.</h3>
        <h3 class="signup-heading success-heading">
          Welcome to Liwa Capital Advisors.
        </h3>
        <p class="signup-description">
          We're excited to embark on this journey together.
        </p>
      </div>
      <router-link class="enter-link" to="/">
        <Button label="View vour dashboard" />
      </router-link>
    </v-card>
  </div>
</template>

<script lang="ts">
import Button from "../common/button.vue";

export default {
  components: { Button },
};
</script>

<style scoped>
.congratulations-bg {
  background-image: url("../../assets/png/SignUp3.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 18px;
}
.signup-card {
  box-shadow: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  max-width: 425px;
  background: transparent;
}
.signup-content {
  text-align: center;
}
.success-heading {
  font-size: 26px;
}

.signup-description {
  font-size: 16px;
  color: #8692a6;
  text-align: center;
}

.logo-img {
  max-width: 80px;
  margin-bottom: 18px;
}
.success-heading {
  margin-bottom: 0px;
}

@media (max-width: 620px) {
  .congratulations-bg {
    background-size: contain;
    background-position: top;
  }
}
</style>
