<template>
  <div>
    <v-card class="mx-auto signup-card">
      <v-card-item>
        <div class="signup-content">
          <div class="signup-container">
            <div>
              <h3 class="signup-heading">Let's get you set up!</h3>
              <div class="list-items">
                <div
                  class="list-container"
                  v-for="item in itemList"
                  :key="item.id"
                >
                  <div :class="[item.id === 1 && 'item-id', 'item']">
                    {{ item.id }}
                  </div>
                  <div class="list-data">
                    <h4 class="list-title">{{ item.title }}</h4>
                    <p class="list-sub-title">{{ item.subtitle }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                :width="290"
                class="step-img"
                src="../../assets/png/hero-signup.png"
              />
            </div>
          </div>
        </div>
      </v-card-item>
      <router-link to="/signup2">
        <Button label="Lets get started" />
      </router-link>
    </v-card>
  </div>
</template>

<script lang="ts">
import Button from "../common/button.vue";

interface itemList {
  id: number;
  title: string;
  subtitle: string;
}

export default {
  name: "ItemList",
  components: { Button },
  data(): { itemList: itemList[] } {
    return {
      itemList: [
        {
          id: 1,
          title: "Add your personal details",
          subtitle:
            "Let us get to know you better for a personalized experience.",
        },
        {
          id: 2,
          title: "Create your account",
          subtitle:
            "Unlock the full potential of our platform by setting up your unique account.",
        },
        {
          id: 3,
          title: "Access your dashboard",
          subtitle:
            "Take control of your journey as you explore your personalized dashboard.",
        },
        {
          id: 4,
          title: "Fund your portfolio",
          subtitle:
            "Begin your investing journey and watch your portfolio grow with just a few clicks.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.signup-container {
  gap: 32px;
  max-width: 790px;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 315px;
}
.signup-heading {
  margin-bottom: 24px;
}
.signup-card {
  box-shadow: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
}
.signup-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.list-items {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.list-container {
  display: flex;
  gap: 16px;
}
.list-data {
  text-align: left;
}
.item,
.item-id {
  min-width: 20px;
  min-height: 20px;
  max-width: 20px;
  max-height: 20px;
  border-radius: 20px;
  font-weight: bold;
  background: #fff9ec;
  color: #ff9f1c;
  font-size: 10px;
  margin-top: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.item-id {
  background: #ca8a4b;
  color: white;
}

.list-title {
  font-size: 17px;
  font-weight: 500;
  color: #112546;
}
.list-sub-title {
  font-size: 14px;
  color: #8692a6;
}

.btn-container {
  margin-left: 90%;
  width: 100%;
}

@media (max-width: 768px) {
  .signup-container {
    grid-template-columns: 1fr;
  }
  .step-img {
    margin: auto;
    width: 100% !important;
  }
  .btn-container {
    margin: auto;
  }
  .signup-card {
    align-items: center;
    margin-top: 48px;
  }
}
</style>
