<template>
  <figure class="podcast">
    <figcaption class="podcast__caption">
      This appears on the
      <a href="/podcast/rss.xml">Podcast</a>
    </figcaption>
    <audio controls :src="url">
      Your browser does not support the
      <code>audio</code> element.
    </audio>
  </figure>
</template>

<script>
export default {
  name: 'Podcast',
  props: {
    url: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import '~@theme/styles/variables';

.podcast {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 2em;
  &__caption {
    font-weight: $font-weight-bold;
    font-size: 0.7em;
    text-transform: uppercase;
    color: $date-color;
  }
}
</style>



