<template>
  <header class="header">
    <div class="header__wrap">
      <a class="header__logo" href="/">
        <span>F</span>
        <span>R</span>
        <span>G</span>
        <span>M</span>
        <span>N</span>
        <span>T</span>
        <span>S</span>
      </a>
      <div class="header__tagline">Bite-size fiction and thoughts</div>
    </div>
  </header>
</template>

<script>
</script>

<style lang="scss">
@import '~@theme/styles/variables';

.header {
  border-bottom: 2px solid $color-text-dark;
  padding: 0.75rem;
  display: flex;
  justify-content: center;
  &__logo {
    display: inline-flex;
    justify-content: space-between;
    width: 100%;
    font-weight: $font-weight-bold;
    color: $color-text-dark !important;
    transition: all 0.3s;
    &:hover {
      border-color: transparent;
      justify-content: center;
    }
  }
  &__tagline {
    font-size: 0.8em;
    text-transform: uppercase;
    text-align: center;
  }
}
</style>
