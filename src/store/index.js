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
      state.contacts = state.contacts.filter(contact => contact.id !== id)
    },
    favorites(state, id) {
      state.contacts.filter(contact => {
        if (contact.id == id) {
          contact.favorites = !contact.favorites
        }
      })
    }
  },
  state: {
    contacts: [
      {
        id: 7,
        name: "Name",
        phone: "79023334455",
        icon: "http://www.nretnil.com/avatar/LawrenceEzekielAmos.png",
        favorites: false
      },
      {
        id: 5,
        name: "Name 1",
        phone: "79023334456",
        icon: "http://www.nretnil.com/avatar/LawrenceEzekielAmos.png",
        favorites: true
      },
      {
        id: 9,
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
