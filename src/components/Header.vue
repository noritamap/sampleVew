<template>
  <ul class="nav">
    <li>
      <router-link :to="{name: 'Home',  path: '/page'}">HOME</router-link>
    </li>
    <li>
      <h1> <router-link :to="{name: 'Top',  path: '/'}">CHA-CHA-CHA</router-link></h1>
    </li>
    <li>
      <router-link :to="{ name: 'About',  path: '/about'}">ABOUT</router-link>
    </li>
  </ul>
</template>
