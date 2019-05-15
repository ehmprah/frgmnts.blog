<template>
  <ul class="tags">
    <li v-for="tag in tags">
      <!-- TODO: implement tag pages! -->
      {{ tag }}
    </li>
  </ul>
</template>

<script>
export default {
  props: ['tags'],
};
</script>

<style lang="scss">
ul.tags {
  padding: 0;
  display: inline;
  text-transform: uppercase;
  li {
    display: inline;
    a {
      font-size: 0.95em;
      font-weight: bold;
      text-transform: uppercase;
      color: #222;
    }
  }
  li::after {
    content: ', ';
  }
  li:last-child::after {
    content: none;
  }
}

a.tag,
a.tag:visited {
  text-transform: uppercase;
  font-size: 0.8em;
  color: #999;
}
</style>



