<template>
  <div class="article-header">
    <h1 class="article-header__title">{{ $page.frontmatter.title }}</h1>
    <div class="article-header__details">
      <div>
        by
        <span class="article-header__author">{{ $page.frontmatter.author }}</span>
      </div>
      <div>
        updated
        <span class="article-header__updated">{{ lastUpdated }}</span>
      </div>
      <div>
        tagged
        <Tags :tags="$page.frontmatter.tags" class="article-header__tags"/>
      </div>
    </div>
  </div>
</template>

<script>
import Tags from '@theme/components/Tags.vue';

export default {
  computed: {
    lastUpdated: function() {
      // const date = new Date(this.$page.lastUpdated);
      const date = new Date();
      return date.toLocaleDateString('en-US', {
        month: 'long',
        day: '2-digit',
        year: 'numeric',
      });
    },
  },
  components: {
    Tags,
  },
};
</script>

<style lang="scss">
@import '~@theme/styles/variables';

.article-header {
  text-align: center;

  &__title {
    text-transform: uppercase;
  }

  &__author,
  &__updated,
  &__tags {
    font-weight: $font-weight-bold;
  }

  &__details {
    margin-bottom: 1.5em;
    line-height: 1.5em;
  }

  &__tags * {
    color: $color-text-dark;
  }
}
</style>



