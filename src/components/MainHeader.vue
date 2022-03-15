<template>
  <header>
      <div class="container">
          <figure class="header__logo">
              <img src="" alt="Boolflix">
          </figure>
          <nav class="header__nav">
              <input type="text" class="header__searchbar" placeholder="Search a film or a series">
              <btn class="header__search-btn">Search</btn>
          </nav>
      </div>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
header {
    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;

        .header__logo {
            color: $accent-color;
            font-weight: 600;
            font-size: 30px;
        }

        .header__nav {
            display: flex;
            align-items: center;
            gap: 10px;

            .header__searchbar {
                border: 1px solid $secondary_color;
                background-color: black;
                color: $secondary_color;
                padding: 10px 20px;
            }

            .header__search-btn {
                padding: 10px 15px;
                background-color: $accent_color;
                cursor: pointer;
            }
        }
    }
}
</style>