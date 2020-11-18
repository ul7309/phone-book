import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  actions: {},
  mutations: {
    create(state, newContact) {
      state.contacts.unshift(newContact);
    },
    remove(state, id) {
      state.contacts.splice(id, 1);
    },
    favorites(state, id) {
      return state.contacts.filter((contact, index) =>
        id === index ? contact.favorites = !contact.favorites : false
      );
    }
  },
  state: {
    contacts: [
      {
        id: 0,
        name: "Name",
        phone: "79023334455",
        icon: "http://www.nretnil.com/avatar/LawrenceEzekielAmos.png",
        favorites: false
      },
      {
        id: 1,
        name: "Name 1",
        phone: "79023334456",
        icon: "http://www.nretnil.com/avatar/LawrenceEzekielAmos.png",
        favorites: true
      },
      {
        id: 2,
        name: "Name 2",
        phone: "79023334456",
        icon: "http://www.nretnil.com/avatar/LawrenceEzekielAmos.png",
        favorites: false
      }
    ]
  },
  getters: {
    contacts(state) {
      return state.contacts;
    }
  }
});
