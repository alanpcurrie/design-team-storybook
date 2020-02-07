<template>
  <section>
    <header>
      <h1>Useful links, resources and tutorials</h1>
    </header>
    <segment-list-block-media :items="items" />
    <segment-list-block-media :items="itemsSmall" size="small" />
  </section>
</template>

<script>
import Hero from '../images/e-signatures3.jpg'
import StoryBookLogo from '../images/story-book-logo.png'
import SopraSteriaLogo from '../images/Sopra_Steria_logo.png'
import SegmentListBlockMedia from '../segments/SegmentListBlockMedia'
export default {
  name: 'ResourcesPage',
  components: {
    SegmentListBlockMedia
  },
  data() {
    return {
      itemsSmall: [
        {
          title: 'Docs',
          text: 'https://storybook.js.org/docs/examples/',
          imageUrl: SopraSteriaLogo,
          size: 'small'
        }
      ]
    }
  }
}
</script>
