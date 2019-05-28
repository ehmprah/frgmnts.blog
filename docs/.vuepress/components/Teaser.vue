<template>
  <section class="teaser">
    <Tags :tags="page.frontmatter.tags"/>
    <router-link :to="page.path" class="teaser__link">{{ page.frontmatter.title }}</router-link>
  </section>
</template>


<script>
import Tags from '@theme/components/Tags.vue';

export default {
  name: 'Teaser',
  props: {
    page: {
      type: Object,
      required: true,
    },
  },
  components: {
    Tags,
  },
};
</script>


<style lang="scss">
@import '~@theme/styles/variables';

.teaser {
  text-transform: uppercase;
  font-weight: $font-weight-bold;
  margin: 1.5em 0 0 0;
  padding: 1.5em 1.5em 0 1.5em;
  border-top: 1px solid $border-color;
  text-align: center;
  &__link {
    font-size: 1.2em;
  }
  &:first-child {
    border-top: none;
    padding-top: 0;
  }
  .tags {
    display: block;
    padding: 0;
  }
}
</style>
