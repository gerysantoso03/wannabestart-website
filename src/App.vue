<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Kiwi+Maru&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lexend&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap");
@import "./assets/scss/_variable.scss";
/* Global Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 10px;
}

body {
  position: relative;
}

section {
  padding: 6rem;
}

label {
  font-size: 1.4rem;
  font-weight: bold;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  font-size: 1.4rem;
  cursor: pointer;
  color: $dark;
}

i {
  font-size: 1.6rem;
}

p {
  font-size: 1.8rem;
  font-weight: 300;
  color: $dark;
}

img {
  width: 100%;
}

/* Scrollbar Styles */
::-webkit-scrollbar {
  width: 3px;
}

::-webkit-scrollbar-track {
  background-color: $light-gray;
}

::-webkit-scrollbar-thumb {
  background: $dark-blue;
}

/* Navbar Active Style */
a.router-link-exact-active {
  color: $light-blue;
}

#app {
  font-family: "Lexend Deca", "Lexend", "Kiwi Maru", sans-serif;
}
</style>
