<template>
  <div>
    <div class="head">Создать контакт</div>
    <form class="form" @submit.prevent="submit">
      <div class="form-group">
        <label for="name">Имя</label>
        <input id="name" type="text" v-model="name" placeholder="Имя" :class="{ error: nameError }" />
      </div>
      <div class="form-group">
        <label for="phone">Телефон</label>
        <input id="phone" type="text" v-model="phone" placeholder="Телефон" :class="{ error: phoneError }" />
      </div>
      <div class="form-group form-group--flex">
        <input
          id="favorite"
          type="checkbox"
          v-model="favorite"
          placeholder="В избранное"
        />
        <label for="favorite">В избранное</label>
      </div>
      <button type="submit" class="add">Создать</button>
    </form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      name: "",
      phone: "",
      favorite: false,
      nameError: false,
      phoneError: false,
    };
  },
  methods: {
    ...mapMutations(["create"]),
    submit() {
      if (this.name.length < 1 || this.phone.length < 1) {
        if (this.name.length < 1) {
          this.nameError = true;
        }
        if (this.phone.length < 1) {
          this.phoneError = true;
        }
        setTimeout(function(){
          this.nameError = false;
          this.phoneError = false;
        },200)
        return false
      }
      
      this.create({
        id: Date.now(),
        name: this.name,
        phone: this.phone,
        icon: "http://www.nretnil.com/avatar/LawrenceEzekielAmos.png",
        favorites: this.favorite,
      });
      this.$router.push("/");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form {
  padding: 20px;
}
.form-group {
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.form-group--flex {
  flex-direction: row;
  align-items: center;
}
.form-group input {
  padding: 7px;
  border-radius: 4px;
  border: 1px solid #cecece;
  transition: border .3s;
}
.form-group input[type="text"] {
  margin-top: 5px;
  width: 100%;
}
.form-group label {
  font-size: 12px;
}
.form-group input.error {
  border: 1px solid red;
}
</style>
