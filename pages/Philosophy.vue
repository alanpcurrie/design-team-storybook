<template>
  <section>
    <header>
      <h1>Storybook for Design Systems</h1>
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
  name: 'PhilosophyPage',
  components: {
    SegmentListBlockMedia
  },
  data() {
    return {
      items: [
        {
          title: 'Philosophy',
          text: 'Testing components in isolation. Source of truth. Portable and reusable stories',
          imageUrl: SopraSteriaLogo
        },
        {
          title: 'Question...',
          text: 'Question - Should components be javascript framework agnostic?',
          imageUrl: SopraSteriaLogo,
          size: 'small'
        },
      ]
    }
  }
}
</script>
