<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
*:focus,
*:active {
  outline: none;
}
* {
  box-sizing: border-box;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto 0;
  position: relative;
  border: 1px solid #ccc;
  max-width: 300px;
  min-height: 300px;
  border-radius: 4px;
}
.head {
  background: url(assets/icon-phone.jpg) no-repeat left 20px center;
  border-bottom: 1px solid black;
  background-size: 20px;
  padding: 10px 10px 10px 50px;
  text-align: left;
}
.wrap {
  height: 200px;
  overflow-x: auto;
}
.add {
  position: absolute;
  top: auto;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 14px;
  border-radius: 0;
  border: 0;
  cursor: pointer;
  transition: background 0.3s;
  background: #efefef;
  text-decoration: none;
  font-size: 14px;
  color: #120202;
}
.add:hover {
  background: #ccc;
}
</style>
