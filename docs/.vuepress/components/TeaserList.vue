<template>
  <div class="posts" v-if="posts.length">
    <template v-for="post in posts">
      <Teaser :page="post" :showDate="showDate" />
    </template>
  </div>
</template>

<script>
export default {
  props: {
    showDate: {
      type: Boolean,
      required: false,
    },
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
          return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
        });
      return posts;
    },
  },
};
</script>
