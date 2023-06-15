<template>
  <div class="signupStepContainer">
    <div class="step-container">
      <v-card class="mx-auto signup-card">
        <div class="signup-content">
          <h3 class="signup-heading">What's your name?</h3>
          <p class="signup-description">
            Please enter your full name as it appears on your Driver's License
            or Passport.
          </p>
        </div>
        <v-form @submit.prevent="onSubmit" class="input-form">
          <div class="input-row">
            <div class="input-col">
              <v-text-field
                v-model="firstName"
                :rules="firstNameRequired"
                label="First name"
              ></v-text-field>
            </div>

            <div class="input-col">
              <v-text-field
                v-model="lastName"
                :rules="lastNameRequired"
                label="Last name"
              ></v-text-field>
            </div>
          </div>
          <!-- <router-link class="enter-link" to="/signup3"> -->
          <button class="enter-btn" type="submit" :disabled="isDisabledBtn">
            <span class="enter-text">Press Enter</span>
            <img src="../../assets/svg/rightArrow.svg" class="arrow-img" />
          </button>
          <!-- </router-link> -->
        </v-form>
      </v-card>
      <router-link to="/">
        <button>
          <img src="../../assets/svg/leftArrow.svg" class="left-arrow" />
        </button>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, ref } from "vue";
import { useRouter } from "vue-router";

export default {
  data: () => ({
    firstNameRequired: [
      (value) => {
        if (value?.length > 0) return true;

        return "First name is required";
      },
    ],
    lastNameRequired: [
      (value) => {
        if (value?.length > 0) return true;

        return "Last name is required";
      },
    ],
  }),
  setup: () => {
    const router = useRouter();
    const firstName = ref<string>("");
    const lastName = ref<string>("");

    const onSubmit = () => {
      router.push("/signup3");
    };

    const isDisabledBtn = computed(() => {
      return !firstName.value || !lastName.value;
    });

    return {
      onSubmit,
      isDisabledBtn,
      firstName,
      lastName,
    };
  },
};
</script>

<style scoped>
.signupStepContainer {
  position: relative;
}
.signup-heading {
  text-align: left;
}
.signup-card {
  box-shadow: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  max-width: 385px;
}
.signup-content {
  text-align: start;
}
.input-form {
  width: 100%;
}
.input-row {
  display: flex;
  gap: 18px;
}
.input-col {
  width: 100%;
  padding: 0px;
}

.signup-description {
  font-size: 16px;
  color: #8692a6;
}

.arrow-img {
  max-width: 42px;
  transform: rotate(180deg);
  padding: 4px;
  background: rgba(112, 112, 112, 1);

  border-radius: 50%;
}
.left-arrow {
  max-width: 42px;
  position: absolute;
  top: 48%;
  left: 15%;
}
.enter-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 165px;
  gap: 12px;
  margin: auto;
  margin-top: 12px;
}

.enter-text {
  font-weight: bold;
  font-size: 18px;
}
.enter-link {
  text-decoration: none;
}

.enter-btn:disabled .enter-text {
  font-weight: bold;
  color: #7c8493;
  font-size: 18px;
}

.enter-btn:disabled .arrow-img {
  background: rgba(112, 112, 112, 0.559);
}

@media (max-width: 768px) {
  .step-container {
    position: relative;
    max-width: 400px;
    margin: auto;
    padding: 18px;
  }
  .left-arrow {
    top: 8%;
    left: 16px;
  }
  .input-row {
    flex-direction: column;
    gap: 0;
  }
}
</style>
