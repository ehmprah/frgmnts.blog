<template>
  <section>
    <div v-if="related" class="more-posts">
      <h2>Related posts</h2>
      <ul class="more-posts__teasers">
        <li v-for="post in related">
          <Teaser :page="post" />
        </li>
      </ul>
    </div>
    <div v-if="recent" class="more-posts">
      <h2>Most recent posts</h2>
      <ul class="more-posts__teasers">
        <li v-for="post in recent">
          <Teaser :page="post" />
        </li>
      </ul>
    </div>
    <div v-if="random" class="more-posts">
      <h2>Also see</h2>
      <ul class="more-posts__teasers">
        <li v-for="post in random">
          <Teaser :page="post" />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import Teaser from '@components/Teaser.vue';

export default {
  computed: {
    posts() {
      return this.$site.pages
        .filter(page => page !== this.$page)
        .filter(page => page.frontmatter.type === 'post')
        .filter(page => page.frontmatter.published === true);
    },
    related() {
      const related = this.posts
        .filter(page => {
          return !this.tag || page.frontmatter.tags.indexOf(this.tag) > -1;
        })
        .slice(0, 3);
      // Because filter will return a new array, we have to manually remove
      // the pages to make sure all posts are unique.
      related.forEach(page => {
        this.posts.splice(this.posts.indexOf(page), 1);
      });
    },
    recent() {
      return this.posts
        .sort((a, b) => {
          return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
        })
        .splice(0, 3);
    },
    random() {
      return this.posts.sort(() => 0.5 - Math.random()).splice(0, 3);
    },
  },
  components: {
    Teaser,
  },
};
</script>

<style lang="scss">
@import '~@theme/styles/variables';
@import '~@theme/styles/mixins';

.more-posts {
  @include border-top;

  &__teasers {
    padding: 0;
    list-style-type: none;
  }
}

@media only screen and (min-width: 480px) {
  .more-posts {
    ul {
      display: flex;
      li {
        flex-grow: 1;
        flex-basis: 0;
      }
    }
    .teaser {
      padding: 0;
      margin: 0;
    }
  }
}
</style>
