<template>
  <div class="posts" v-if="posts.length">
    <template v-for="post in posts">
      <Teaser :page="post"/>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      required: false,
    },
  },
  computed: {
    posts() {
      let posts = this.$site.pages
        .filter(page => page.frontmatter.type === 'post')
        .filter(page => page.frontmatter.published === true)
        .filter(page => {
          return !this.tag || page.frontmatter.tags.indexOf(this.tag) > -1;
        })
        .sort((a, b) => {
          return new Date(b.lastUpdated) - new Date(a.lastUpdated);
        });
      return posts;
    },
  },
};
</script>
