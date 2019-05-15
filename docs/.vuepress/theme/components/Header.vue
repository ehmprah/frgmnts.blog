<template>
  <a class="logo" href="/">FRGMNTS</a>
</template>

<script>
</script>

<style lang="scss">
@import '~@theme/styles/variables';

.logo {
  display: block;
  text-align: center;
  font-size: 0.75em;
  font-weight: $font-weight-bold;
  color: #222 !important;
  letter-spacing: 10px;
  transition: all 0.3s;
  padding: 0.5rem;
  border-bottom: 1px solid $border-color;
  &:hover {
    letter-spacing: 2px;
    border-color: $border-color;
  }
}
</style>
