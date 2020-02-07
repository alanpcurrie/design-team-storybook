<template>
  <section>
    <header>
      <h1>Welcome to storybook</h1>
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
  name: 'WelcomePage',
  components: {
    SegmentListBlockMedia
  },
  data() {
    return {
      itemsSmall: [
        {
          title: 'What is Storybook?',
          text: 'Storybook is a user interface development environment and playground for UI components. The tool enables developers to create components independently and showcase components interactively in an isolated development environment.',
          imageUrl: SopraSteriaLogo,
          size: 'small'
        },
      ]
    }
  }
}
</script>
