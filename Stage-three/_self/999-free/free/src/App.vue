<template>
  <div id="app">
    <ul>
      <router-link to="/home" tag="li">home</router-link>
      <router-link to="/file" tag="li">file</router-link>
      <router-link to="/about" tag="li">about</router-link>
    </ul>
    <router-view/>
  </div>
</template>

<style lang="scss">

</style>