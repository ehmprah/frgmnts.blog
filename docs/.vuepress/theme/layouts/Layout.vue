<template>
  <div class="page">
    <Header class="page__header" />

    <main class="page__content">
      <ArticleHeader v-if="type === 'post'" />
      <Content />
      <Share v-if="type === 'post'" />
      <MorePosts v-if="type === 'post'" />
    </main>
    <header class="page__footer">
      <Footer />
    </header>
  </div>
</template>

<script>
import ArticleHeader from '@theme/components/ArticleHeader.vue';
import MorePosts from '@theme/components/MorePosts.vue';
import Header from '@theme/components/Header.vue';
import Footer from '@theme/components/Footer.vue';
import Share from '@theme/components/Share.vue';

export default {
  computed: {
    type: function() {
      if (this.$page.frontmatter.type) {
        return this.$page.frontmatter.type;
      }
      return '';
    },
  },
  components: {
    ArticleHeader,
    MorePosts,
    Header,
    Footer,
    Share,
  },
};
</script>

<style src="@theme/styles/page.scss" lang="scss"></style>
