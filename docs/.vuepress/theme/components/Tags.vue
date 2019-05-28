<template>
  <ul class="tags">
    <li v-for="tag in tags" class="tags__tag">
      <Tag class="tags__tag-link" :tag="tag"/>
    </li>
  </ul>
</template>

<script>
import Tag from '@theme/components/Tag.vue';

export default {
  props: ['tags'],
  components: {
    Tag,
  },
};
</script>

<style lang="scss">
@import '~@theme/styles/variables';

.tags {
  list-style-type: none;
  padding: 0;
  display: inline;
  text-transform: uppercase;
  color: $border-color;
  &__tag {
    display: inline;
    &-link {
      font-size: 0.9em;
      font-weight: $font-weight-bold;
      text-transform: uppercase;
      color: inherit;
    }
  }
  &__tag::after {
    content: ', ';
  }
  &__tag:last-child::after {
    content: none;
  }
}
</style>
