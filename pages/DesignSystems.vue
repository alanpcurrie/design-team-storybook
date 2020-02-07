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
  name: 'DesignSystemsPage',
  components: {
    SegmentListBlockMedia
  },
  data() {
    return {
      items: [
        {
          title: 'Design Systems',
          text: 'Visibility, portable, reusable, themable  communication: creates a business wide design language, ',
          imageUrl: SopraSteriaLogo,
        },
        {
          title: 'Le StoryBookLogo',
          text: 'Connecting design and development helps teams identify edge cases before shipping and rapidly respond to bugs after shipping.',
          imageUrl: SopraSteriaLogo,
         
        },
        {
          title: 'Example',
          text: 'Example - Atomic design finding contextual issues',
          imageUrl: SopraSteriaLogo,
          size: 'small'
        },
      ],
    }
  }
}
</script>
