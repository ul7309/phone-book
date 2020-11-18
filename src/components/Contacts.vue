<template>
  <div>
    <div class="head">
      <input type="text" v-model="nameFilter" placeholder="Найти контакт" />
    </div>
    <div class="wrap">
      <div v-for="contact of filtered" :key="contact.id" class="item">
        <img :src="contact.icon" :alt="contact.name" width="50" />
        <div class="description">
          <div>{{ contact.name }}</div>
          <div class="phone">{{ contact.phone }}</div>
        </div>
        <button
          type="button"
          class="remove"
          @click="removeContact(contact.id)"
          aria-label="Удалить контакт"
        ></button>
        <button
          type="button"
          class="favorites"
          :class="{ active: contact.favorites }"
          @click="addFavorites(contact.id)"
          aria-label="Добавить контакт в избранное"
        ></button>
      </div>
    </div>
    <router-link class="add" to="/addContacts">Добавить</router-link>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  data() {
    return {
      nameFilter: "",
    };
  },
  computed: {
    ...mapGetters(["contacts"]),
    allContacts() {
      return this.contacts;
    },
    filtered() {
      let sortContacts = this.allContacts.slice().sort((a,b) => a.favorites-b.favorites).reverse();
      return sortContacts.filter((contact) => contact.name.includes(this.nameFilter));
    },
  },
  methods: {
    ...mapMutations(["remove", "favorites"]),
    removeContact(id) {
      this.remove(id);
    },
    addFavorites(id) {
      this.favorites(id);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.head input {
  width: 100%;
  background: url(../assets/icon-search.svg) no-repeat right 5px center;
  background-size: 15px;
  padding: 8px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #cecece;
}
.item {
  position: relative;
  padding: 2px 5px 0;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgb(167, 167, 167);
}
.phone {
  font-size: 12px;
}
.description {
  text-align: left;
}
.remove {
  position: absolute;
  top: 5px;
  left: auto;
  right: 10px;
  width: 15px;
  height: 15px;
  background: url(../assets/icon-close.svg) no-repeat center;
  background-color: transparent;
  border: 0;
}
.favorites {
  background: url(../assets/icon-heart.svg) no-repeat center;
  width: 15px;
  height: 15px;
  background-color: transparent;
  border: 0;
  background-size: contain;
  position: absolute;
  top: 30px;
  right: 10px;
}
.favorites.active {
  background: url(../assets/icon-heart-red.svg) no-repeat center;
  background-size: contain;
}
</style>
