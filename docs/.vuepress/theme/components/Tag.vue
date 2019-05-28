<template>
  <router-link :to="`/t/${slugify(tag)}.html`">{{ tag }}</router-link>
</template>

<script>
export default {
  props: ['tag'],
  methods: {
    slugify(text) {
      return text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(/[^\w\-]+/g, '') // Remove all non-word chars
        .replace(/\-\-+/g, '-') // Replace multiple - with single -
        .replace(/^-+/, '') // Trim - from start of text
        .replace(/-+$/, ''); // Trim - from end of text
    },
  },
};
</script>







