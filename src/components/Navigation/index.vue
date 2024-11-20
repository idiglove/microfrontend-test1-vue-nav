<script setup lang="ts">

</script>

<template>
  <ul>
    <li>
      <a href ="/">Home</a>
    </li>
    <li>
      <a href="/react18">React18</a>
    </li>
  </ul>
</template>

<style scoped>
  ul {
    display: flex;
    list-style-type: none;
    padding: 0;
  }

  li {
    margin-right: 1rem;
  }

  a {
    color: #42b883;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
</style>
