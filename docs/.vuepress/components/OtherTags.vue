<template>
  <div class="other-tags">
    <h2>Other Tags</h2>
    <Tags :tags="tags"/>
  </div>
</template>

<script>
import Tags from '@theme/components/Tags.vue';

export default {
  computed: {
    tags() {
      // Collect all tags
      let tagList = {};
      this.$site.pages.forEach(page => {
        if (page.frontmatter.tags) {
          page.frontmatter.tags.forEach(tag => {
            tagList[tag] = null;
          });
        }
      });
      console.log(tagList);
      return Object.keys(tagList)
        .sort(() => 0.5 - Math.random())
        .slice(0, 5);
    },
  },
  components: {
    Tags,
  },
};
</script>

<style lang="scss">
@import '~@theme/styles/variables';
@import '~@theme/styles/mixins';

.other-tags {
  @include border-top;

  .tags {
    display: flex;
    &__tag {
      flex: 1;
      text-align: center;
    }
    &__tag::after {
      content: '';
    }
  }
}
</style>



