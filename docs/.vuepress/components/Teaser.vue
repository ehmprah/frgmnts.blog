<template>
  <section class="teaser">
    <Tags :tags="page.frontmatter.tags"/>
    <router-link :to="page.path">{{ page.frontmatter.title }}</router-link>
  </section>
</template>


<script>
export default {
  name: 'Teaser',
  props: {
    page: {
      type: Object,
      required: true,
    },
  },
};
</script>


<style lang="scss">
.teaser {
  ul.tags {
    padding: 0;
    li a {
      font-size: 0.8em;
      color: #999;
    }
  }
  a[rel='bookmark'] {
    text-transform: uppercase;
    font-weight: bold;
  }
}
</style>
