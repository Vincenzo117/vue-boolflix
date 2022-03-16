<template>
  <header>
    <div class="container">
      <figure class="header__logo">
        <img src="" alt="Boolflix" />
      </figure>
      <nav class="header__nav">
        <input
          type="text"
          class="header__searchbar"
          placeholder="Search a film or a series"
          v-model="searchInput"
          @keyup.enter="search()"
        />
        <button class="header__search-btn" @click="search()">
          Search
        </button>
      </nav>
    </div>
  </header>
</template>

<script>
import state from "../store.js";

export default {
  name: "MainHeader",
  data() {
    return {
      searchInput: "",
    };
  },
  methods: {
    search() {
      state.filter = this.searchInput;
      state.getItems();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
header {
  background-color: black;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;

    .header__logo {
      color: $accent-color;
      font-weight: 600;
      font-size: 30px;
      cursor: pointer;
    }

    .header__nav {
      display: flex;
      align-items: center;
      gap: 10px;
      width: max-content;

      .header__searchbar {
        border: 1px solid $secondary_color;
        max-width: 300px;
        background-color: black;
        color: $secondary_color;
        padding: 10px 20px;
      }

      .header__search-btn {
        padding: 10px 15px;
        background-color: $accent_color;
        border: 0;
        color: $primary_color;
        font-size: 16px;
        cursor: pointer;
      }
    }
  }
}
</style>